import { extractSectionByTitle } from "@src/helpers/extract-section-by-table.helper";
import { AffectiveSocialDomain } from "../models/affective-social-domain.model";
import { extractAffectiveSocialDomain } from "../utils/extract-affective-social-domain.util";

export class AffectiveSocialDomainMapper {
  static map(text: string): AffectiveSocialDomain | undefined {
    const chunkAffectiveSocialText = extractSectionByTitle({
      text: text,
      startTitle: "Ámbito Afectivo y Social",
      endTitle: "Ámbito Emocional",
    })
    
    if(!chunkAffectiveSocialText) return undefined;

    const affectiveSocialDomain = extractAffectiveSocialDomain(chunkAffectiveSocialText);

    return affectiveSocialDomain;
    
  }
}