import { extractSectionByTitle } from '@src/helpers/extract-section-by-table.helper';
import { RequiredProfessionals } from '../models/required-professionals.model';
import { extractRequiredProfessionalsDomain } from '../utils/extract-required-professionals-domain.util';

export class RequiredProfessionalsMapper {
  static map(text: string): RequiredProfessionals | undefined {
    const chunkRequiredProfessionalsText = extractSectionByTitle({
      text: text,
      startTitle: 'Profesionales Requeridos por el Estudiante',
      endTitle: 'Requerimiento de Adecuaciones a los Objetivos de Aprendizaje',
    });

    if (!chunkRequiredProfessionalsText) return undefined;

    const requiredProfessionals = extractRequiredProfessionalsDomain(
      chunkRequiredProfessionalsText,
    );

    return requiredProfessionals;
  }
}
