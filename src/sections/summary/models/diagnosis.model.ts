export type NeeType = 'NEE' | 'NEEP' | 'NEET' | '';

export interface DiagnosisInfo {
  neeType: NeeType;
  diagnosis: string;
  degreeOrType?: string;
  diagnosisIssueDate?: string; // dd-mm-yyyy
  familyConsentDate?: string; // dd-mm-yyyy
  nextReevaluationDate?: string; // dd-mm-yyyy
  associatedSyndrome?: string;
  justification?: string; // texto largo
}
