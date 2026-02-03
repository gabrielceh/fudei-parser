import { extractSectionByTitle } from "@src/helpers/extract-section-by-table.helper";
import { normalizeWhitespace } from "@src/helpers/normalize-white-space.helper";

export class HealthAssessmentMapper {
  static map(text: string) {   
    const healthAssessmentText = extractSectionByTitle({
      text: text,
      startTitle: "Valoración de Salud",
      endTitle: "Evaluación Psicoeducativa",
    });

    return normalizeWhitespace(healthAssessmentText || "");
    
  }


}