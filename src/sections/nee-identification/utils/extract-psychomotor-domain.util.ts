import { match } from "../../../helpers/match.helper";
import { normalizeWhitespace } from "../../../helpers/normalize-white-space.helper";
import { PsychomotorDomain } from "../models/psychomotor-domain.model";

const bool = (v?: string) => v?.toUpperCase() === "SI";

export const extractPsychomotorDomain = (
  text: string
): PsychomotorDomain => {
  const result: PsychomotorDomain = {
    fineMotor: false,
    grossMotor: false,
    development:{
      bodySchema: false,
      visoManualCoordination: false,
      laterality: false,
      positioning: false,
      spatialOrientation: false,
      displacement: false,
      temporalOrientation: false,
      balance: false,
    },
    other: "",
  };
  // 🔹 Motricidad fina
  result.fineMotor = bool(
    match(/Motricidad fina:\s*(SI|NO)/i, text)
  );
  // 🔹 Motricidad gruesa
  result.grossMotor = bool(
    match(/Motricidad gruesa:\s*(SI|NO)/i, text)
  );
  // 🔹 Esquema corporal
  result.development.bodySchema = bool(
    match(/Esquema corporal:\s*(SI|NO)/i, text)
  );
  // 🔹 Coordinación viso-manual
  result.development.visoManualCoordination = bool(
    match(/Coordinación viso-manual:\s*(SI|NO)/i, text)
  );
  // 🔹 Lateralidad
  result.development.laterality = bool(
    match(/Lateralidad:\s*(SI|NO)/i, text)
  );
  // 🔹 Posicionamiento
  result.development.positioning = bool(
    match(/Posicionamiento:\s*(SI|NO)/i, text)
  );
  // 🔹 Orientación espacial
  result.development.spatialOrientation = bool(
    match(/Orientación espacial:\s*(SI|NO)/i, text)
  );
  // 🔹 Desplazamiento
  result.development.displacement = bool(
    match(/Desplazamiento:\s*(SI|NO)/i, text)
  );
  // 🔹 Orientación temporal
  result.development.temporalOrientation = bool(
    match(/Orientación temporal:\s*(SI|NO)/i, text)
  );
  // 🔹 Equilibrio
  result.development.balance = bool(
    match(/Equilibrio:\s*(SI|NO)/i, text)
  );

  // 🔹 Otro
  result.other = normalizeWhitespace(match(/Otro:\s*([\s\S]*)/i, text) || "");


  return result;
};
