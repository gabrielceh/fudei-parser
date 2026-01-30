import { extractSectionByTitle } from "../../../helpers/extract-section-by-table.helper";
import { normalizeWhitespace } from "../../../helpers/normalize-white-space.helper";


export class PsychoeducationalAssessmentMapper {
  static map(text: string) {  
    const chunkPsychoeducationalAssessment = extractSectionByTitle({
      text: text,
      startTitle: "Evaluación Psicoeducativa",
      endTitle: "Contexto Familiar y Escolar",
    });

    return normalizeWhitespace(chunkPsychoeducationalAssessment || "");
    
  }


}