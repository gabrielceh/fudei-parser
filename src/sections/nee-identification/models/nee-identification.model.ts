import { AffectiveSocialDomain } from "./affective-social-domain.model";
import { CognitiveDomain } from "./cognitive-domain.model";
import { CommunicationDomain } from "./communication-domain.model";
import { EmotionalDomain } from "./emotional-domain.model";
import { LanguageDomain } from "./language-domain.model";
import { PsychomotorDomain } from "./psychomotor-domain.model";
import { RequiredProfessionals } from "./required-professionals.model";
import { SensoryPerceptualDomain } from "./sensory-perceptual-domain.model";

export interface NeeIdentificationSection {
  cognitive?: CognitiveDomain;
  language?: LanguageDomain;
  communication?: CommunicationDomain;
  sensoryPerceptual?: SensoryPerceptualDomain;
  psychomotor?: PsychomotorDomain;
  affectiveSocial?: AffectiveSocialDomain;
  emotional?: EmotionalDomain;
  curricular?: string;
  family?: string;
  otherDomain?: string;
  studentStrengths?: string;
  requiredProfessionals?: RequiredProfessionals;
  learningObjectivesAdjustments?: boolean;
}
