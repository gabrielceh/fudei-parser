import { match } from "../../../helpers/match.helper";
import { AffectiveSocialDomain } from "../models/affective-social-domain.model";

const bool = (v?: string) => v?.toUpperCase() === "SI";

export const extractAffectiveSocialDomain = (
  text: string
): AffectiveSocialDomain => {
  const result: AffectiveSocialDomain = {
    selfEsteemSecurity: false,
    autonomy: false,
    selfCare: false,
    socialSkills: false,
    relationships: {
      peers: false,
      adults: false,
    },
    other: "",
  };
  // 🔹 Autoestima y Seguridad en sí mismo
  result.selfEsteemSecurity = bool(
    match(/Autoestima y Seguridad en sí mismo:\s*(SI|NO)/i, text)
  );
  // 🔹 Autonomía
  result.autonomy = bool(
    match(/Autonomía:\s*(SI|NO)/i, text)
  );
  // 🔹 Autocuidado
  result.selfCare = bool(
    match(/Autocuidado:\s*(SI|NO)/i, text)
  );
  // 🔹 Habilidades sociales
  result.socialSkills = bool(
    match(/Habilidades sociales:\s*(SI|NO)/i, text)
  );
  // 🔹 Pares
  result.relationships.peers = bool(
    match(/Pares\s*(SI|NO)/i, text)
  );
  // 🔹 Adultos
  result.relationships.adults = bool(
    match(/Adultos\s*(SI|NO)/i, text)
  );

  // 🔹 Otro
  result.other = match(/Otro\s*([^\n]+)/i, text)?.trim() || "";


  return result;
};
