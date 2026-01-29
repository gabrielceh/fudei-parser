import { extractSectionByTitle } from "../../../helpers/extract-section-by-table.helper";

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

    console.log(response);
    

    return response ? response.replace(/\s+/g, " ").trim() : undefined;
  }
}