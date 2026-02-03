import { extractSectionByTitle } from "@src/helpers/extract-section-by-table.helper";
import { normalizeWhitespace } from "@src/helpers/normalize-white-space.helper";

export class FamilyDomainMapper {
  static map(text: string): string | undefined {
    const chunkFamilyDomainText = extractSectionByTitle({
      text: text,
      startTitle: "Ámbito Familiar",
      endTitle: "Otro Ámbito",
    })

    if(!chunkFamilyDomainText) return undefined;

    const response = extractSectionByTitle({
      text: chunkFamilyDomainText,
      startTitle: "Indique qué apoyos requiere la familia para que el estudiante acceda, participe y progrese en su aprendizaje:",
    })

    return response ? normalizeWhitespace(response) : undefined;
  }
}