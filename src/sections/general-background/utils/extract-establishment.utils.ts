import { extractSectionByTitle } from "@src/helpers/extract-section-by-table.helper";
import { EstablishmentIdentification } from "../models/general-background.interface";

export const extractEstablishment = (text: string):EstablishmentIdentification => {
  const result: EstablishmentIdentification = {
    name: "",
    dependencyType: "",
    rbd: "",
    address: "",
    region: "",
    commune: "",
  };

  // 🔹 Nombre del Establecimiento
  result.name = extractSectionByTitle({
    text: text,
    startTitle: "Nombre del Establecimiento:",
    endTitle: "Tipo de Dependencia:",
  }) ?? '';
  
  // 🔹 Tipo de Dependencia
  result.dependencyType = extractSectionByTitle({
    text: text,
    startTitle: "Tipo de Dependencia:",
    endTitle: "RBD:",
  }) ?? '';

  // 🔹 RBD
  result.rbd = extractSectionByTitle({
    text: text,
    startTitle: "RBD:",
    endTitle: "Dirección:",
  }) ?? '';
 
  // 🔹 Dirección
  result.address = extractSectionByTitle({
    text: text,
    startTitle: "Dirección:",
    endTitle: "Región:",
  }) ?? '';
 
  // 🔹 Región
  result.region = extractSectionByTitle({
    text: text,
    startTitle: "Región:",
    endTitle: "Comuna:",
  }) ?? '';
 
  // 🔹 Comuna
  result.commune = extractSectionByTitle({
    text: text,
    startTitle: "Comuna:",
  }) ?? '';


  return result;
};