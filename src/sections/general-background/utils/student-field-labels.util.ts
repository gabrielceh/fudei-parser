import { StudentLabelPattern } from "../types/student-label-pattern";

export const STUDENT_FIELD_LABELS:  readonly StudentLabelPattern[] = [
  { key: "fullName", pattern: "Nombre" },
  { key: "nationality", pattern: "Nacionalidad" },
  { key: "dni", pattern: "Run" },
  { key: "address", pattern: "Dirección Estudiante" },
  { key: "gender", pattern: "Sexo" },
  { key: "region", pattern: "Región" },
  { key: "birthDate", pattern: "Fecha Nacimiento" },
  { key: "commune", pattern: "Comuna" },
  { key: "age", pattern: "Edad" },
  {
    key: "admissionCourse",
    pattern: "Curso de Ingreso al\\s*Establecimiento"
  },
  { key: "currentCourse", pattern: "Curso Actual" },

  { key: "isPriorityStudent", pattern: "Estudiante Prioritario" },
  { key: "isPreferredStudent", pattern: "Estudiante Preferente" },
  { key: "isJunaebBeneficiary", pattern: "Beneficiario Junaeb" },
  {
    key: "hasPreviousSpecialSchoolParticipation",
    pattern: "Participación Anterior\\s*en Escuela Especial"
  },
  { key: "hasPreviousPIEParticipation", pattern: "Participación Anterior en PIE" },
  {
    key: "previousPIEYears",
    pattern: "Número de Años PIE"
  },
  {
    key: "isSpanishNativeLanguage",
    pattern: "¿?Su lengua habitual es el[\\s\\S]*?Español\\?"
  }
] as const;
