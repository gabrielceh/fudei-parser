import { extractSectionByTitle } from "../../../helpers/extract-section-by-table.helper";

export class HealthAssessmentMapper {
  static map(text: string) {   
    const healthAssessmentText = extractSectionByTitle({
      text: text,
      startTitle: "Valoración de Salud",
      endTitle: "Evaluación Psicoeducativa",
    });

    return healthAssessmentText?.replace(/\s+/g, " ").trim() || "";
    
  }


}