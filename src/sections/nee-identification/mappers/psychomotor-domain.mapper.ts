import { extractSectionByTitle } from "../../../helpers/extract-section-by-table.helper";
import { extractPsychomotorDomain } from "../utils/extract-psychomotor-domain.util";

export class PsychomotorDomainMapper {
  static map(text: string): any {
    const chunkPsychomotorText = extractSectionByTitle({
      text: text,
      startTitle: "Ámbito Psicomotor",
      endTitle: "Ámbito Afectivo y Social",
    })
    
    if(!chunkPsychomotorText) return undefined

    const psychomotorDomain = extractPsychomotorDomain(chunkPsychomotorText);

    console.log(psychomotorDomain);
    
  }
}