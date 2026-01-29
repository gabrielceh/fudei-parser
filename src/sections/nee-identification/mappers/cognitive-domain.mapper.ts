import { extractSectionByTitle } from "../../../helpers/extract-section-by-table.helper";
import { CognitiveDomain } from "../models/cognitive-domain.model";
import { extractCognitiveDomain } from "../utils/extract-cognitive-domain.util";

export class CognitiveDomainMapper {
  static map(text: string): CognitiveDomain | undefined {
    const chunkCognitiveDomainText = extractSectionByTitle({
      text: text,
      startTitle: "Ámbito Cognitivo",
      endTitle: "Ámbito Lenguaje",
    })

    if(!chunkCognitiveDomainText) return undefined
    
    const cognitiveDomain = extractCognitiveDomain(chunkCognitiveDomainText);

    return cognitiveDomain;
    
  }
}