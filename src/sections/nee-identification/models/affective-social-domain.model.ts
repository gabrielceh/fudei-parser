import { WithOther } from '../types/with-other.interface';

export interface AffectiveSocialDomain extends WithOther {
  selfEsteemSecurity: boolean;
  autonomy: boolean;
  selfCare: boolean;
  socialSkills: boolean;
  relationships: SocialRelationships;
}

export interface SocialRelationships {
  peers: boolean;
  adults: boolean;
}
