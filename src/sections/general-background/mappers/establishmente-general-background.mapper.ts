import { extractTableFields } from "../../../helpers/extract-table-fields.helper";
import { EstablishmentIdentification,  } from "../models/general-background.interface";
import { ESTABLISHMENT_FIELD_LABELS } from "../utils/establishment-field-labels.util";



export class EstablishmenteGeneralBackgroundMapper {

  static map(text: string): EstablishmentIdentification {
    const textSlitep = text.split("Antecedentes de Identificación del Establecimiento")[1].trim();
    const raw = extractTableFields(textSlitep, ESTABLISHMENT_FIELD_LABELS);
    
    return {
      address: raw.address ?? "",
      name: raw.name ?? "",
      dependencyType: raw.dependencyType ?? "",
      rbd: raw.rbd ?? "",
      region: raw.region ?? "",
      commune: raw.commune ?? "", 
   };
  }
}