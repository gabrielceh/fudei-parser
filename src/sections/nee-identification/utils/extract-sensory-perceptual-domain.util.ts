import { match } from "../../../helpers/match.helper";
import { CommunicationDomain } from "../models/communication-domain.model";
import { SensoryPerceptualDomain } from "../models/sensory-perceptual-domain.model";

const bool = (v?: string) => v?.toUpperCase() === "SI";

export const extractSensoryPerceptualDomain = (
  text: string
): SensoryPerceptualDomain => {
  const result: SensoryPerceptualDomain = {
    visual: false,
    haptic: false,
    auditory: false,
    olfactoryGustatory: false,
    tactile: false,
    other: "",
  };

  // 🔹 Percepción visual
  result.visual = bool(
    match(/Percepción visual:\s*(SI|NO)/i, text)
  );
  // 🔹 Percepción háptica
  result.haptic = bool(
    match(/Percepción háptica:\s*(SI|NO)/i, text)
  );
  // 🔹 Percepción auditiva
  result.auditory = bool(
    match(/Percepción auditiva:\s*(SI|NO)/i, text)
  );
  // 🔹 Percepción olfativa-gustativa
  result.olfactoryGustatory = bool(
    match(/Percepción olfativa-gustativa:\s*(SI|NO)/i, text)
  );
  // 🔹 Percepción táctil
  result.tactile = bool(
    match(/Percepción táctil:\s*(SI|NO)/i, text)
  );

  // 🔹 Otro
  result.other = match(/Otro:\s*([^\n]+)/i, text)?.trim() || "";


  return result;
};
