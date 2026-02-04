import { extractSectionByTitle } from '@src/helpers/extract-section-by-table.helper';
import { SensoryPerceptualDomain } from '../models/sensory-perceptual-domain.model';
import { extractSensoryPerceptualDomain } from '../utils/extract-sensory-perceptual-domain.util';

export class SensoryPerceptualDomainMapper {
  static map(text: string): SensoryPerceptualDomain | undefined {
    const chunkSensoryPerceptualText = extractSectionByTitle({
      text: text,
      startTitle: 'Ámbito Sensoperceptivo',
      endTitle: 'Ámbito Psicomotor',
    });

    if (!chunkSensoryPerceptualText) return undefined;

    const sensoryPerceptualDomain = extractSensoryPerceptualDomain(chunkSensoryPerceptualText);

    return sensoryPerceptualDomain;
  }
}
