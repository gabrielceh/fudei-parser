import { extractSectionByTitle } from "@src/helpers/extract-section-by-table.helper";
import { extractProcessResponsible } from "../utils/extract-process-responsible.utils";

export class ProcessResponsibleMapper {
  static map(text: string): any | undefined {
    const chunkProcessResponsibleText = extractSectionByTitle({
    text: text,
    startTitle: "Profesional Responsable del Proceso",
    endTitle: "Director del Establecimiento",
  })

    if(!chunkProcessResponsibleText) return undefined;

    const processResponsible = extractProcessResponsible(chunkProcessResponsibleText);

    return processResponsible;
  }
}