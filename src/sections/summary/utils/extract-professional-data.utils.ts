import { extractSectionByTitle } from "../../../helpers/extract-section-by-table.helper";
import { ProfessionalInfo } from "../models/multidisciplinary-team.model";

export const extractProfessionalData = (text: string):ProfessionalInfo => {
  const result: ProfessionalInfo = {
    dni: "",
    fullName: "",
    specialty: "",
    professionalRegister: "",
    phone: "",
    email: "",
    otherCareer: "",
    evaluationDate: "",
  };

  // 🔹 DNI
  result.dni = extractSectionByTitle({
    text: text,
    startTitle: "RUN:",
    endTitle: "Nombres y Apellidos:",
  }) ?? "";

  // 🔹 Nombres y Apellidos
  result.fullName = (extractSectionByTitle({
    text: text,
    startTitle: "Nombres y Apellidos:",
    endTitle: "Carrera/Especialidad:",
  }) ?? "").replace(/\s+/g, " ").trim();

  // 🔹 Carrera/Especialidad
  result.specialty = (extractSectionByTitle({
    text: text,
    startTitle: "Carrera/Especialidad:",
    endTitle: "Número de Registro\\s*Profesional:",
  }) ?? "").replace(/\s+/g, " ").trim();

  // 🔹 Número de Registro Profesional
  result.professionalRegister = extractSectionByTitle({
    text: text,
    startTitle: "Número de Registro\\s*Profesional:",
    endTitle: "Teléfono:",
  }) ?? "";

  // 🔹 Teléfono
  result.phone = extractSectionByTitle({
    text: text,
    startTitle: "Teléfono:",
    endTitle: "Correo electrónico:",
  }) ?? "";

  // 🔹 Correo electrónico
  result.email = (extractSectionByTitle({
    text: text,
    startTitle: "Correo electrónico:",
    endTitle: "Fecha de Evaluación:",
  }) ?? "").replace(/\s+/g, " ").trim();

  // 🔹 Fecha de Evaluación
  result.evaluationDate = extractSectionByTitle({
    text: text,
    startTitle: "Fecha de Evaluación:",
    endTitle: "Otra carrera:",
  }) ?? "";

  // 🔹 Otra carrera
  result.otherCareer = extractSectionByTitle({
    text: text,
    startTitle: "Otra carrera:",
  }) ?? "";

  return result;
}