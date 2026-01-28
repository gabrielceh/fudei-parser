import { match } from "../../../helpers/match.helper";
import { normalizePdfText } from "../../../helpers/normalize-pdf-text.helper";
import { AnamnesisInfo } from "../models/anamnesis.model";

export class AnamnesisInfoMapper {
  static map(text: string): AnamnesisInfo {  
    const textNormalized = normalizePdfText(text);  
    const anamnesisBackground =
      match(
        /Antecedentes relevantes de la Anamnesis([\s\S]*?)(?=Valoración de Salud)/i,
        textNormalized
      )?.trim();
    
    if(!anamnesisBackground) return {
      relevantBackground: "",
      spanishLanguageLevel: "",
    };
    
    const spanishLanguageLevelTitle = "Si el o la estudiante no es usuario habitual del español, consigne el nivel de español que maneja tanto en la comprensión como en la expresión oral y/o escrita:\n"  
  
    const relevantBackground = match(
      /Anamnesis:\s*([\s\S]*?)(?=Si el o la estudiante no es usuario habitual del español)/i,
      anamnesisBackground
    );

    const spanishLanguageLevel = anamnesisBackground.split(spanishLanguageLevelTitle)[1]

    return({
      relevantBackground: relevantBackground ? normalizePdfText(relevantBackground) : "", 
      spanishLanguageLevel: spanishLanguageLevel ? normalizePdfText(spanishLanguageLevel) : "",
    });
    
    
  }


}