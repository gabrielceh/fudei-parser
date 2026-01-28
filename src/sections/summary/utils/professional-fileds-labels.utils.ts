import { ProfessionalLabelPattern } from "../types/professional-label-pattern";

export const PROFESSIONAL_FIELD_LABELS:ProfessionalLabelPattern[] = [
  {
    key: "dni",
    pattern: "RUN",
  },
  {
    key: "fullName",
    pattern: "Nombres y Apellidos",
  },
  {
    key: "specialty",
    pattern: "Carrera/Especialidad",
  },
  {
    key: "professionalRegister",
    pattern: "Número de Registro\\s*Profesional",
  },
  {
    key: "phone",
    pattern: "Teléfono",
  },
  {
    key: "email",
    pattern: "Correo electrónico",
  },
  {
    key: "evaluationDate",
    pattern: "Fecha de Evaluación",
  },
  {
    key: "otherCareer",
    pattern: "Otra carrera",
  },
] as const;