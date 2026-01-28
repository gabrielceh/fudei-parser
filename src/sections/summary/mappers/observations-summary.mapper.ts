import { match } from "../../../helpers/match.helper";
import { normalizePdfText } from "../../../helpers/normalize-pdf-text.helper";

export class ObservationsSummaryMapper {
  static map(text: string) {  
    const textNormalized = normalizePdfText(text);  
    const observationsText = textNormalized.split("Observaciones")[1]

    console.log(observationsText);
    
    
    return observationsText || "";
    
  }


}