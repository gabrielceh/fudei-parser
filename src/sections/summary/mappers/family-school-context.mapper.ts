import { match } from "../../../helpers/match.helper";
import { normalizePdfText } from "../../../helpers/normalize-pdf-text.helper";
import { ContextFactors, FamilyAndSchoolContext } from "../models/family-and-school-context.model";


export class FamilySchoolContextMapper {
  static map(text: string): FamilyAndSchoolContext  {  
    const textNormalized = normalizePdfText(text);  
    const familySchoolChunk =
      match(
        /Contexto Familiar y Escolar([\s\S]*?)(?=Observaciones)/i,
        textNormalized
      )?.trim();

    let familyContext: ContextFactors = {difficulties:"", strengths:""};
    let schoolContext: ContextFactors = {difficulties:"", strengths:""};

    if(!familySchoolChunk) return {
      family: familyContext,
      school: schoolContext,
    };
    
    const familyChunk = match(
      /Describa aspectos del Contexto Familiar que:([\s\S]*?)(?=Describa aspectos del Contexto Escolar que:)/i,
      familySchoolChunk
    );
    const schoolChunk = familySchoolChunk.split("Describa aspectos del Contexto Escolar que:")[1];

    if(familyChunk){
      familyContext = this.getContext(familyChunk);
    }

    if(schoolChunk){
      schoolContext = this.getContext(schoolChunk);
    }
    
    return({family: familyContext, school: schoolContext});
  }

  private static getContext(text: string): ContextFactors {
    const strengthsText = match(
      /Favorecen el aprendizaje:([\s\S]*?)(?=Dificultan el aprendizaje:)/i,
      text
    )
    const difficultiesArray = text.split("Dificultan el aprendizaje:");
    const difficulties = difficultiesArray[difficultiesArray.length > 1 ? 1 : 0];

    return{
      strengths: strengthsText ? normalizePdfText(strengthsText) : "",
      difficulties: difficulties ? normalizePdfText(difficulties) : "",
    }
  }


}