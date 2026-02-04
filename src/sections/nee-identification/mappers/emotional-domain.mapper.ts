import { extractSectionByTitle } from '@src/helpers/extract-section-by-table.helper';
import { EmotionalDomain } from '../models/emotional-domain.model';
import { extractEmotionalDomain } from '../utils/extract-emotional-domain.util';

export class EmotionalDomainMapper {
  static map(text: string): EmotionalDomain | undefined {
    const chunkEmotionalDomainText = extractSectionByTitle({
      text: text,
      startTitle: 'Ámbito Emocional',
      endTitle: 'Ámbito Curricular',
    });

    if (!chunkEmotionalDomainText) return undefined;

    const emotionalDomain = extractEmotionalDomain(chunkEmotionalDomainText);

    return emotionalDomain;
  }
}
