import { extractSectionByTitle } from "../../../helpers/extract-section-by-table.helper";
import { extractAffectiveSocialDomain } from "../utils/extract-affective-social-domain.util";

export class AffectiveSocialDomainMapper {
  static map(text: string): any {
    const chunkPsychomotorText = extractSectionByTitle({
      text: text,
      startTitle: "Ámbito Afectivo y Social",
      endTitle: "Ámbito Emocional",
    })
    
    if(!chunkPsychomotorText) return undefined

    const affectiveSocialDomain = extractAffectiveSocialDomain(chunkPsychomotorText);

    console.log(affectiveSocialDomain);
    
  }
}