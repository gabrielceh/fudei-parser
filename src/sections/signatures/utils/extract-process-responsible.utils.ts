import { extractSectionByTitle } from "../../../helpers/extract-section-by-table.helper";
import { ProcessResponsible } from "../models/process-responsible.model";

export const extractProcessResponsible = (text: string): ProcessResponsible => {
  const result: ProcessResponsible = {
    fullName: "",
    profession: "",
    position: "",
    phone: "",
    email: "",
  };

  // 🔹 Nombre y Apellidos
  result.fullName = extractSectionByTitle({
    text: text,
    startTitle: "Nombre y Apellidos:",
    endTitle: "Profesión:",
  }) ?? '';
  // 🔹 Profesión
  result.profession = extractSectionByTitle({
    text: text,
    startTitle: "Profesión:",
    endTitle: "Cargo:",
  }) ?? '';
  // 🔹 Posición
  result.position = extractSectionByTitle({
    text: text,
    startTitle: "Cargo:",
    endTitle: "Teléfono:",
  }) ?? '';
  // 🔹 Teléfono
  result.phone = extractSectionByTitle({
    text: text,
    startTitle: "Teléfono:",
    endTitle: "Correo electrónico:",
  }) ?? '';
  // 🔹 Correo Electrónico
  result.email = extractSectionByTitle({
    text: text,
    startTitle: "Correo electrónico:",
  }) ?? '';
  
  return result;
};