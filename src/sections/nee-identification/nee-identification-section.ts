import { extractSectionByTitle } from "../../helpers/extract-section-by-table.helper";
import { normalizePdfText } from "../../helpers/normalize-pdf-text.helper";
import { AffectiveSocialDomainMapper } from "./mappers/affective-social-domain.mapper";
import { CognitiveDomainMapper } from "./mappers/cognitive-domain.mapper";
import { CommunicationDomainMapper } from "./mappers/communication-domain.mapper";
import { CurricularDomainMapper } from "./mappers/curricular-domain.mapper";
import { EmotionalDomainMapper } from "./mappers/emotional-domain.mapper";
import { LanguageDomainMapper } from "./mappers/language-domain.mapper";
import { PsychomotorDomainMapper } from "./mappers/psychomotor-domain.mapper";
import { SensoryPerceptualDomainMapper } from "./mappers/sensory-perceptual-domain.mapper";
import { NeeIdentificationSection } from "./models/nee-identification.model";

export const neeIdentificationSection = (text: string): NeeIdentificationSection | undefined => {
  const textNormalized = normalizePdfText(text);  
  const chunkNeeIdentificationText = extractSectionByTitle({
    text: textNormalized,
    startTitle: "III IDENTIFICACIÓN DE NEE",
    endTitle: "IV FIRMA DE LOS RESPONSABLES DEL PROCESO DE EVALUACIÓN DIAGNÓSTICA INTEGRAL",
  })
  if(!chunkNeeIdentificationText) return undefined;

  const cognitiveDomain = CognitiveDomainMapper.map(chunkNeeIdentificationText);
  const languageDomain = LanguageDomainMapper.map(chunkNeeIdentificationText);
  const communicationDomain = CommunicationDomainMapper.map(chunkNeeIdentificationText);
  const sensoryPerceptualDomain = SensoryPerceptualDomainMapper.map(chunkNeeIdentificationText);
  const psychomotorDomain = PsychomotorDomainMapper.map(chunkNeeIdentificationText);
  const affectiveSocialDomain = AffectiveSocialDomainMapper.map(chunkNeeIdentificationText);
  const emotionalDomain = EmotionalDomainMapper.map(chunkNeeIdentificationText);
  const curricularDomain = CurricularDomainMapper.map(chunkNeeIdentificationText);

  return {
    cognitive: cognitiveDomain,
    language: languageDomain,
    communication: communicationDomain,
    sensoryPerceptual: sensoryPerceptualDomain,
    psychomotor: psychomotorDomain,
    affectiveSocial: affectiveSocialDomain,
    emotional: emotionalDomain,
    curricular : curricularDomain,
  }
  

};