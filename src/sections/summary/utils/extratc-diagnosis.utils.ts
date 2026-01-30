import { extractSectionByTitle } from "../../../helpers/extract-section-by-table.helper";
import { DiagnosisInfo, NeeType } from "../models/diagnosis.model";

export const extractDiagnosis = (text: string): DiagnosisInfo => {
  const result: DiagnosisInfo = {
    neeType: "",
    diagnosis: "",
    degreeOrType: "",
    diagnosisIssueDate: "",
    familyConsentDate: "",
    nextReevaluationDate: "",
    associatedSyndrome: "",
    justification: "",
  };

  // 🔹 Tipo de NEE
  result.neeType = (extractSectionByTitle({
    text: text,
    startTitle: "NEE:",
    endTitle: "Diagnóstico:",
  }) || "") as NeeType;

  // 🔹 Diagnóstico
  result.diagnosis = extractSectionByTitle({
    text: text,
    startTitle: "Diagnóstico:",
    endTitle: "Tipo o Grado:",
  }) || "";
  
  // 🔹 Tipo o Grado
  result.degreeOrType = extractSectionByTitle({
    text: text,
    startTitle: "Tipo o Grado:",
    endTitle: "Fecha de Emisión",
  }) || "";
  
  // 🔹 Fecha de Emisión del Diagnóstico
  result.diagnosisIssueDate = extractSectionByTitle({
    text: text,
    startTitle: "Fecha de Emisión del\\s*Diagnóstico:",
    endTitle: "Fecha Consentimiento",
  }) || "";
 
  // 🔹 Fecha Consentimiento Familia
  result.familyConsentDate = extractSectionByTitle({
    text: text,
    startTitle: "Fecha Consentimiento\\s*Familia:",
    endTitle: "Fecha próxima revaluación:",
  }) || "";
  
  // 🔹 Fecha próxima revaluación
  result.nextReevaluationDate = extractSectionByTitle({
    text: text,
    startTitle: "Fecha próxima revaluación:",
    endTitle: "Síndrome asociado al diagnóstico:",
  }) || "";

  const syndromeChunk = extractSectionByTitle({
    text: text,
    startTitle: "Síndrome asociado al diagnóstico:",
    endTitle: "Describa y fundamente las razones de incluir al estudiante en esta categoría",
  });
  
  if(!syndromeChunk){
    result.associatedSyndrome = "";
  }else{
    result.associatedSyndrome = extractSectionByTitle({
      text: syndromeChunk,
      startTitle: "Síndrome:",
    }) || "";
  }

  // 🔹 Describa y fundamente las razones de incluir al estudiante en esta categoría
  result.justification = extractSectionByTitle({
    text: text,
    startTitle: "Describa y fundamente las razones de incluir al estudiante en esta categoría::",
  }) || "";

  return result;
}