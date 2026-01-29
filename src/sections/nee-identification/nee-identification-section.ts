import { extractSectionByTitle } from "../../helpers/extract-section-by-table.helper";
import { normalizePdfText } from "../../helpers/normalize-pdf-text.helper";
import { CognitiveDomainMapper } from "./mappers/cognitive-domain.mapper";
import { NeeIdentificationSection } from "./models/nee-identification.model";

export const neeIdentificationSection = (text: string): NeeIdentificationSection | undefined => {
  const textNormalized = normalizePdfText(text);  
  const chunkNeeIdentificationText = extractSectionByTitle({
    text: textNormalized,
    startTitle: "III IDENTIFICACIÓN DE NEE",
    endTitle: "IV FIRMA DE LOS RESPONSABLES DEL PROCESO DE EVALUACIÓN DIAGNÓSTICA INTEGRAL",
  })
  if(!chunkNeeIdentificationText) return undefined;

  const cognitiveDomain = CognitiveDomainMapper.map(chunkNeeIdentificationText);

  return {
    cognitive: cognitiveDomain,
  }
  

};