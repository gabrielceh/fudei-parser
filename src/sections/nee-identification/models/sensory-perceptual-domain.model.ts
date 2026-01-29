import { WithOther } from "../types/with-other.interface";

export interface SensoryPerceptualDomain extends WithOther {
  visual: boolean;
  haptic: boolean;
  auditory: boolean;
  olfactoryGustatory: boolean;
  tactile: boolean;
}
