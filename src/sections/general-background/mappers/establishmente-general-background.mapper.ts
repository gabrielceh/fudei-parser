import { extractSectionByTitle } from "../../../helpers/extract-section-by-table.helper";
import { EstablishmentIdentification,  } from "../models/general-background.interface";
import { extractEstablishment } from "../utils/extract-establishment.utils";



export class EstablishmenteGeneralBackgroundMapper {

  static map(text: string): EstablishmentIdentification | undefined {
    const chunckEstablishmentGeneralBackground = extractSectionByTitle({
      text: text,
      startTitle: "Antecedentes de Identificación del Establecimiento",
    })

    if(!chunckEstablishmentGeneralBackground) return undefined;

    const establishment = extractEstablishment(chunckEstablishmentGeneralBackground);

    return establishment;
  //   const raw = extractTableFields(chunckEstablishmentGeneralBackground, ESTABLISHMENT_FIELD_LABELS);
    
  //   return {
  //     name: raw.name ?? "",
  //     dependencyType: raw.dependencyType ?? "",
  //     rbd: raw.rbd ?? "",
  //     address: raw.address ?? "",
  //     region: raw.region ?? "",
  //     commune: raw.commune ?? "", 
  //  };
  }
}