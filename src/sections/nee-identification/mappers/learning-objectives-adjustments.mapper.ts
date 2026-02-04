import { extractSectionByTitle } from '@src/helpers/extract-section-by-table.helper';
import { parsePdfBoolean } from '@src/helpers/parse-pdf-boolean';

export class LearningObjectivesAdjustmentsMapper {
  static map(text: string): boolean | undefined {
    const chunkLearningObjectivesAdjustmentsText = extractSectionByTitle({
      text: text,
      startTitle: 'Requerimiento de Adecuaciones a los Objetivos de Aprendizaje:',
    });

    if (chunkLearningObjectivesAdjustmentsText === undefined) return undefined;

    return parsePdfBoolean(chunkLearningObjectivesAdjustmentsText);
  }
}
