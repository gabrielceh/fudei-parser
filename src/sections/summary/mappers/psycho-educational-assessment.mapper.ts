import { extractSectionByTitle } from '@src/helpers/extract-section-by-table.helper';
import { normalizeWhitespace } from '@src/helpers/normalize-white-space.helper';

export class PsychoeducationalAssessmentMapper {
  static map(text: string) {
    const chunkPsychoeducationalAssessment = extractSectionByTitle({
      text: text,
      startTitle: 'Evaluación Psicoeducativa',
      endTitle: 'Contexto Familiar y Escolar',
    });

    return normalizeWhitespace(chunkPsychoeducationalAssessment || '');
  }
}
