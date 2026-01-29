import { extractSectionByTitle } from "../../../helpers/extract-section-by-table.helper";
import { CommunicationDomain } from "../models/communication-domain.model";
import { extractCommunicationDomain } from "../utils/extract-communication-domain.util";

export class CommunicationDomainMapper {
  static map(text: string): CommunicationDomain | undefined {
    const chunkCommunicationDomainText = extractSectionByTitle({
      text: text,
      startTitle: "Ámbito Comunicación",
      endTitle: "Ámbito Sensoperceptivo",
    })

    if(!chunkCommunicationDomainText) return undefined

    const communicationDomain = extractCommunicationDomain(chunkCommunicationDomainText);

    return communicationDomain;
    
  }
}