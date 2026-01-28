import { EstablishmentIdentification } from "../models/general-background.interface";


export type EstablishmentKey = keyof EstablishmentIdentification;

export type EstablishmentLabelPattern = {
  key: EstablishmentKey;
  pattern: string;
};
