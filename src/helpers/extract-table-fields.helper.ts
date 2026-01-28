import { LabelPattern } from "../types/label-pattern.interface";
/**
 * Extracts key–value fields from a PDF table-like text section using label patterns.
 *
 * This function is designed for PDF scraping scenarios where data is presented
 * as sequential labels followed by their values, without a guaranteed line
 * structure or consistent formatting.
 *
 * It supports:
 * - Multiline values (e.g. names split across lines)
 * - Labels broken by line breaks
 * - Fields without line breaks between them
 * - Variable spacing and PDF formatting artifacts
 *
 * The extraction strategy is based on:
 * - A regex per label
 * - A non-greedy capture until the next label appears
 * - Order-dependent parsing (labels must be provided in reading order)
 *
 * ⚠️ Important:
 * - The function does NOT perform type conversion.
 * - All extracted values are returned as raw strings.
 * - Boolean, number, or date normalization must be handled separately.
 *
 * @typeParam TModel Target domain model whose keys are used for mapping.
 *
 * @param text Raw text extracted from a PDF section.
 * @param labels Ordered list of label patterns defining how to locate each field.
 *
 * @returns A partial record mapping model keys to extracted raw string values.
 */
export const extractTableFields = <TModel> (
  text: string,
  labels: readonly LabelPattern<TModel>[]
): Partial<Record<keyof TModel, string>> => {
  const result: Partial<Record<keyof TModel, string>> = {};

  for (let i = 0; i < labels.length; i++) {
    const current = labels[i]; // label actual
    const normalizedText = normalizeLabels(text);
    // const next = labels[i + 1]; // label siguiente

     // 1️⃣ Buscar el siguiente label que REALMENTE exista en el texto
    let next: string | null = null;

    for (let j = i + 1; j < labels.length; j++) {
      const candidate = labels[j];
      const candidateRegex = new RegExp(`${candidate.pattern}:`, "i");

      if (candidateRegex.test(normalizedText)) {
        next = candidate.pattern;
        break;
      }
    }

    const pattern = next
      ? `${current.pattern}:([\\s\\S]*?)(?=${next}:)`// capura el valor del label hasta el siguiente incluidos saltos de linea
      : `${current.pattern}:([\\s\\S]*)`; // captura todo el texto porque no hay mas label

    const regex = new RegExp(pattern, "i");
    const match = normalizeLabels(text).match(regex);

    // Extraemos el valor capturado
    const rawValue = match?.[1]
      ?.replace(/\s+/g, " ")
      .trim();

    result[current.key] = rawValue || undefined; // guardamos la key
  }

  return result;
};


/**
 * Normalizes raw PDF text to improve regex-based label matching.
 *
 * This helper function fixes common PDF text extraction issues such as:
 * - Unexpected carriage returns (\r)
 * - Words split across lines
 * - Excessive or inconsistent whitespace
 *
 * The normalization step ensures that labels and values can be matched
 * reliably even when the original PDF layout is broken or inconsistent.
 *
 * @param text Raw text extracted from a PDF.
 * @returns Normalized text suitable for regex matching.
 */
const normalizeLabels = (text: string): string => {
 return text
    .replace(/\r/g, "")
    .replace(/([a-zA-ZáéíóúÁÉÍÓÚ])\n([a-zA-ZáéíóúÁÉÍÓÚ])/g, "$1 $2")
    .replace(/\s+/g, " ")
    .trim();
};

