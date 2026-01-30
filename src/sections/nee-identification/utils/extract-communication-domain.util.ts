import { match } from "../../../helpers/match.helper";
import { normalizeWhitespace } from "../../../helpers/normalize-white-space.helper";
import { CommunicationDomain } from "../models/communication-domain.model";

const bool = (v?: string) => v?.toUpperCase() === "SI";

export const extractCommunicationDomain = (
  text: string
): CommunicationDomain => {
  const result: CommunicationDomain = {
    expressive: false,
    receptive: false,
    other: "",
  };

  // 🔹 Nivel Expresivo
  result.expressive = bool(
    match(/Nivel Expresivo:\s*(SI|NO)/i, text)
  );
  // 🔹 Nivel Receptivo
  result.receptive = bool(
    match(/Nivel Receptivo:\s*(SI|NO)/i, text)
  );

  // 🔹 Otro
  result.other = normalizeWhitespace(match(/Otro:\s*([\s\S]*)/i, text)|| "");


  return result;
};
