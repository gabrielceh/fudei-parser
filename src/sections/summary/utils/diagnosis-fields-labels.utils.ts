import { DiagnosisLabelPattern } from "../types/diagnosis-label-pattern";

export const DIAGNOSIS_FIELD_LABELS:DiagnosisLabelPattern[] = [
  {
    key: "neeType",
    pattern: "NEE",
  },
  {
    key: "diagnosis",
    pattern: "Diagnóstico",
  },
  {
    key: "degreeOrType",
    pattern: "Tipo o Grado",
  },
  {
    key: "diagnosisIssueDate",
    pattern: "Fecha de Emisión del\\s*Diagnóstico",
  },
  {
    key: "familyConsentDate",
    pattern: "Fecha Consentimiento\\s*Familia",
  },
  {
    key: "nextReevaluationDate",
    pattern: "Fecha próxima revaluación",
  },
  {
    key: "associatedSyndrome",
    pattern: "Síndrome asociado al diagnóstico:\\s*Síndrome",
  },
  {
    key: "justification",
    pattern: "Describa y fundamente las razones de incluir al estudiante en esta categoría",
  },
  
] as const;