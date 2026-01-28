import { extractTableFields } from "../../../helpers/extract-table-fields.helper";
import { DiagnosisInfo, NeeType } from "../models/diagnosis.model";
import { DIAGNOSIS_FIELD_LABELS } from "../utils/diagnosis-fields-labels.utils";

export class DiagnosisInfoMapper {
  static map(text: string): DiagnosisInfo {
    const diagnosisText = text
      .split("Antecedentes de Identificación del Equipo Multidisciplinario que realizó la Evaluación Diagnóstica")[0].trim();
      
    const raw = extractTableFields(diagnosisText, DIAGNOSIS_FIELD_LABELS);
    
    const diagnosisInfo: DiagnosisInfo = {
      neeType: raw.neeType as NeeType ?? "",
      diagnosis: raw.diagnosis ?? "",
      degreeOrType: raw.degreeOrType ?? "",
      diagnosisIssueDate: raw.diagnosisIssueDate ?? "",
      familyConsentDate: raw.familyConsentDate ?? "",
      nextReevaluationDate: raw.nextReevaluationDate ?? "",
      associatedSyndrome: raw.associatedSyndrome ?? "",
      justification: raw.justification ?? "",
    };

    return diagnosisInfo;
  }
}