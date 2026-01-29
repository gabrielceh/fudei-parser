import { extractSectionByTitle } from "../../helpers/extract-section-by-table.helper";

export const signaturesSection = (text: string): any | undefined => {
  const textNormalized = text.replace(/\r/g, "");

  const chunkSignaturesText = extractSectionByTitle({
    text: textNormalized,
    startTitle: "IV FIRMA DE LOS RESPONSABLES DEL PROCESO DE EVALUACIÓN DIAGNÓSTICA INTEGRAL"
  })

  console.log(chunkSignaturesText);
  

  
};