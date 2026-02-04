import { extractSectionByTitle } from '@src/helpers/extract-section-by-table.helper';
import { normalizePdfText } from '@src/helpers/normalize-pdf-text.helper';
import { normalizeWhitespace } from '@src/helpers/normalize-white-space.helper';
import { AnamnesisInfo } from '../models/anamnesis.model';

export class AnamnesisInfoMapper {
  static map(text: string): AnamnesisInfo | undefined {
    const textNormalized = normalizePdfText(text);

    const chunkAnamnesis = extractSectionByTitle({
      text: textNormalized,
      startTitle: 'Antecedentes relevantes de la Anamnesis',
      endTitle: 'Valoración de Salud',
    });

    if (!chunkAnamnesis) return undefined;

    const chunckRelevantBackground = extractSectionByTitle({
      text: chunkAnamnesis,
      startTitle:
        'que impacte en el\\s*aprendizaje, según datos recogidos en la entrevista de la Anamnesis:',
      endTitle: 'Si el o la estudiante no es usuario habitual del español',
    });

    const chunkSpanishLanguageLevel = extractSectionByTitle({
      text: chunkAnamnesis,
      startTitle:
        'Si el o la estudiante no es usuario habitual del español, consigne el nivel de español que maneja tanto en la\\s*comprensión como en la expresión oral y/o escrita:',
    });

    return {
      relevantBackground: normalizeWhitespace(chunckRelevantBackground || ''),
      spanishLanguageLevel: normalizeWhitespace(chunkSpanishLanguageLevel || ''),
    };
  }
}
