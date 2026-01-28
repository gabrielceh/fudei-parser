import { EstablishmentLabelPattern } from "../types/establishment-label-pattern";

export const ESTABLISHMENT_FIELD_LABELS: readonly EstablishmentLabelPattern[] = [
  {key: "name", pattern:"Nombre del Establecimiento"},
  {key: "dependencyType", pattern:"Tipo de Dependencia"},
  {key: "rbd", pattern:"RBD"},
  {key: "address", pattern:"Dirección"},
  {key: "region", pattern:"Región"},
  {key: "commune", pattern:"Comuna"},
];