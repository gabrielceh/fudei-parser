import { extractSectionByTitle } from "@src/helpers/extract-section-by-table.helper";
import { normalizeWhitespace } from "@src/helpers/normalize-white-space.helper";

export class ObservationsSummaryMapper {
  static map(text: string): string | undefined {  
    // let chunkPreviousObservations = extractSectionByTitle({
    //   text: text,
    //   startTitle: "Dificultan el aprendizaje:",
    // });

    let chunkPreviousObservations = extractSectionByTitle({
      text: text,
      startTitle: "Observaciones",
    });    
        
    return normalizeWhitespace(chunkPreviousObservations || "");
    
  }


}