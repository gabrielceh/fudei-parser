import { match } from "../../../helpers/match.helper";
import { normalizePdfText } from "../../../helpers/normalize-pdf-text.helper";

export class HealthAssessmentMapper {
  static map(text: string) {  
    const textNormalized = normalizePdfText(text);  
    const healthAssessmentText =
      match(
        /Valoración de Salud([\s\S]*?)(?=Evaluación Psicoeducativa)/i,
        textNormalized
      )?.trim();
    
    return healthAssessmentText || "";
    
  }


}