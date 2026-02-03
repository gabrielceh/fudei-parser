import { extractSectionByTitle } from "@src/helpers/extract-section-by-table.helper";
import { normalizeWhitespace } from "@src/helpers/normalize-white-space.helper";

export class OtherDomainMapper {
  static map(text: string): string | undefined {
    const chunkOtherDomainText = extractSectionByTitle({
      text: text,
      startTitle: "Otro Ámbito",
      endTitle: "Registre fortalezas personales del estudiante",
    })

    if(!chunkOtherDomainText) return undefined;

    return normalizeWhitespace(chunkOtherDomainText);
  }
}