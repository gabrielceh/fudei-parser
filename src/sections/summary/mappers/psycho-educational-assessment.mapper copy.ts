import { match } from "../../../helpers/match.helper";
import { normalizePdfText } from "../../../helpers/normalize-pdf-text.helper";

export class PsychoeducationalAssessmentMapper {
  static map(text: string) {  
    const textNormalized = normalizePdfText(text);  
    const psychoeducationalAssessmentText =
      match(
        /Evaluación Psicoeducativa ([\s\S]*?)(?=Contexto Familiar y Escolar)/i,
        textNormalized
      )?.trim();
    
    return psychoeducationalAssessmentText || "";
    
  }


}