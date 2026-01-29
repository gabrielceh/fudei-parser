import { extractSectionByTitle } from "../../../helpers/extract-section-by-table.helper";

export class OtherDomainMapper {
  static map(text: string): string | undefined {
    const chunkOtherDomainText = extractSectionByTitle({
      text: text,
      startTitle: "Otro Ámbito",
      endTitle: "Registre fortalezas personales del estudiante",
    })

    if(!chunkOtherDomainText) return undefined;

    return chunkOtherDomainText.replace(/\s+/g, " ").trim();
  }
}