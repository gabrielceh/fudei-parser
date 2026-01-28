import { EstablishmenteGeneralBackgroundMapper } from "./mappers/establishmente-general-background.mapper";
import { StudentGeneralBackgroundMapper } from "./mappers/student-general-background.mapper";
import { GeneralBackground } from "./models/general-background.interface";

export const generalBackgroundSection = (text:string):GeneralBackground  => {
  const generalBackgroundSectionText = text.split("I ANTECEDENTES GENERALES")[1].split("II RESUMEN DEL PROCESO")[0].trim();

  const student = StudentGeneralBackgroundMapper.map(generalBackgroundSectionText);
  const establishment = EstablishmenteGeneralBackgroundMapper.map(generalBackgroundSectionText);

  return {student, establishment}
  
}