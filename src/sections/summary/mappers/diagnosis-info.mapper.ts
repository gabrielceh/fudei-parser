import { extractSectionByTitle } from "@src/helpers/extract-section-by-table.helper";
import { DiagnosisInfo } from "../models/diagnosis.model";
import { extractDiagnosis } from "../utils/extratc-diagnosis.utils";

export class DiagnosisInfoMapper {
  static map(text: string): DiagnosisInfo | undefined {
    const chunkDiagnosis = extractSectionByTitle({
      text: text,
      startTitle: "Diagnóstico",
      endTitle: "Antecedentes de Identificación del Equipo Multidisciplinario que realizó la Evaluación Diagnóstica([\\s\\S]*?)Integral",
    });
  
    if(!chunkDiagnosis) return undefined;
      
    const diagnosis = extractDiagnosis(chunkDiagnosis);
    
    return diagnosis
    
    // const raw = extractTableFields(chunkDiagnosis, DIAGNOSIS_FIELD_LABELS);
    
    // const diagnosisInfo: DiagnosisInfo = {
    //   neeType: raw.neeType as NeeType ?? "",
    //   diagnosis: raw.diagnosis ?? "",
    //   degreeOrType: raw.degreeOrType ?? "",
    //   diagnosisIssueDate: raw.diagnosisIssueDate ?? "",
    //   familyConsentDate: raw.familyConsentDate ?? "",
    //   nextReevaluationDate: raw.nextReevaluationDate ?? "",
    //   associatedSyndrome: raw.associatedSyndrome ?? "",
    //   justification: raw.justification ?? "",
    // };

    // return diagnosisInfo;
  }
}