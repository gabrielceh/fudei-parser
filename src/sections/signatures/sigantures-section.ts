import { extractSectionByTitle } from "../../helpers/extract-section-by-table.helper";
import { ProcessResponsibleMapper } from "./mappers/process-responsible.mapper";
import { SchoolDirectorMapper } from "./mappers/school-director.mapper";
import { SignatureOfResponsibles } from "./models/signature-of-responsibles.model";

export const signaturesSection = (text: string): SignatureOfResponsibles | undefined => {
  const textNormalized = text.replace(/\r/g, "");

  const chunkSignaturesText = extractSectionByTitle({
    text: textNormalized,
    startTitle: "IV FIRMA DE LOS RESPONSABLES DEL PROCESO DE EVALUACIÓN DIAGNÓSTICA INTEGRAL"
  })

  if(!chunkSignaturesText) return undefined;

  const processResponsible = ProcessResponsibleMapper.map(chunkSignaturesText);
  const schoolDirector = SchoolDirectorMapper.map(chunkSignaturesText);

  return {
    processResponsible,
    schoolDirector,
  }
  

  
};