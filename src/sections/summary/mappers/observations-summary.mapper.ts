
import { extractSectionByTitle } from "../../../helpers/extract-section-by-table.helper";
import { normalizePdfText } from "../../../helpers/normalize-pdf-text.helper";
import { normalizeWhitespace } from "../../../helpers/normalize-white-space.helper";

export class ObservationsSummaryMapper {
  static map(text: string): string | undefined {  
    // let chunkPreviousObservations = extractSectionByTitle({
    //   text: text,
    //   startTitle: "Dificultan el aprendizaje:",
    // });

    let chunkPreviousObservations = extractSectionByTitle({
      text: text!!,
      startTitle: "Observaciones",
    });    
        
    return normalizeWhitespace(chunkPreviousObservations || "");
    
  }


}