import { extractSectionByTitle } from "../../../helpers/extract-section-by-table.helper";

export class CurricularDomainMapper {
  static map(text: string): string | undefined {
    const chunkCurricularDomainText = extractSectionByTitle({
      text: text,
      startTitle: "Ámbito Curricular",
      endTitle: "Ámbito Familiar",
    })

    if(!chunkCurricularDomainText) return undefined;

    const response = extractSectionByTitle({
      text: chunkCurricularDomainText,
      startTitle: "Indique en qué asignaturas el\/la estudiante requiere apoyo:",
    })

    return response ? response.replace(/\s+/g, " ").trim() : undefined;
  }
}