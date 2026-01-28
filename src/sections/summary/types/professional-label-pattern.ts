import { ProfessionalInfo } from "../models/multidisciplinary-team.model";

export type ProfessionaInfoKey = keyof ProfessionalInfo;

export type ProfessionalLabelPattern = {
  key: ProfessionaInfoKey;
  pattern: string;
};