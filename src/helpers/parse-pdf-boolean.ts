/**
 * Parses a boolean value from raw PDF text.
 *
 * This function is designed for PDF scraping scenarios where boolean values
 * are represented as "SI" / "NO" but may appear mixed with additional text,
 * line breaks, accents, or formatting artifacts.
 *
 * Examples of supported inputs:
 * - "SI"
 * - "Sí"
 * - "Español SI"
 * - "Participación Anterior: SI"
 * - "SI Número de Años PIE: 8"
 *
 * The function:
 * - Normalizes accents (Sí → SI)
 * - Ignores casing
 * - Tolerates multiline and noisy text
 *
 * @param value Raw text extracted from a PDF field
 * @returns `true` if the text contains an affirmative value ("SI"), otherwise `false`
 */
export const parsePdfBoolean = (value?: string): boolean => {
  try {
    if (value === undefined) return false;
    if (!value) return false;

    const normalized = value
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toUpperCase();

    return /\bSI\b/.test(normalized);
  } catch (error) {
    throw new Error(`Error convertiendo SI/NO: ${value}`);
  }
};
