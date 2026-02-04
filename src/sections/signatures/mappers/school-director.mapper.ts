import { extractSectionByTitle } from '@src/helpers/extract-section-by-table.helper';
import { extractSchoolDirector } from '../utils/extract-school-director.utils';

export class SchoolDirectorMapper {
  static map(text: string): any | undefined {
    const chunkSchoolDirectorText = extractSectionByTitle({
      text: text,
      startTitle: 'Director del Establecimiento',
      endTitle: 'Recuerde, una vez finalizado el proceso, DEBE imprimir el FU',
    });

    if (!chunkSchoolDirectorText) return undefined;

    const schoolDirector = extractSchoolDirector(chunkSchoolDirectorText);

    return schoolDirector;
  }
}
