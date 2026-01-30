
import { extractSectionByTitle } from "../../../helpers/extract-section-by-table.helper";
import { normalizePdfText } from "../../../helpers/normalize-pdf-text.helper";

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


    console.log({chunkPreviousObservations});
    

    const textNormalized = normalizePdfText(text);  
    const observationsText = textNormalized.split("Observaciones")[1]
        
    return observationsText || "";
    
  }


}