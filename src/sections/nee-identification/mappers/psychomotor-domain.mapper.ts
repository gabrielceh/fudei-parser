import { extractSectionByTitle } from '@src/helpers/extract-section-by-table.helper';
import { PsychomotorDomain } from '../models/psychomotor-domain.model';
import { extractPsychomotorDomain } from '../utils/extract-psychomotor-domain.util';

export class PsychomotorDomainMapper {
  static map(text: string): PsychomotorDomain | undefined {
    const chunkPsychomotorText = extractSectionByTitle({
      text: text,
      startTitle: 'Ámbito Psicomotor',
      endTitle: 'Ámbito Afectivo y Social',
    });

    if (!chunkPsychomotorText) return undefined;

    const psychomotorDomain = extractPsychomotorDomain(chunkPsychomotorText);

    return psychomotorDomain;
  }
}
