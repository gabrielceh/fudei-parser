import { extractSectionByTitle } from "../../../helpers/extract-section-by-table.helper";

export class StudentStrengthsMapper {
  static map(text: string): string | undefined {
    const chunkStudentStrengths = extractSectionByTitle({
      text: text,
      startTitle: "Registre fortalezas personales del estudiante que considere importantes para su progreso en el aprendizaje:",
      endTitle: "Profesionales Requeridos por el Estudiante",
    })

    if(!chunkStudentStrengths) return undefined;

    return chunkStudentStrengths.replace(/\s+/g, " ").trim();
  }
}