import { extractSectionByTitle } from "../../../helpers/extract-section-by-table.helper";
import { LanguageDomain } from "../models/language-domain.model";
import { extractLanguageDomain } from "../utils/extract-language-domain.util";

export class LanguageDomainMapper {
  static map(text: string): LanguageDomain | undefined {
    const chunkLanguageDomainText = extractSectionByTitle({
      text: text,
      startTitle: "Ámbito Lenguaje",
      endTitle: "Ámbito Comunicación",
    })

    if(!chunkLanguageDomainText) return undefined

    const languageDomain = extractLanguageDomain(chunkLanguageDomainText);
    return languageDomain;
  }
}