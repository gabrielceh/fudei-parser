import { extractSectionByTitle } from '@src/helpers/extract-section-by-table.helper';
import { normalizeWhitespace } from '@src/helpers/normalize-white-space.helper';
import { ContextFactors, FamilyAndSchoolContext } from '../models/family-and-school-context.model';

export class FamilySchoolContextMapper {
  static map(text: string): FamilyAndSchoolContext | undefined {
    const chunkFamilySchoolContext = extractSectionByTitle({
      text: text,
      startTitle: 'Contexto Familiar y Escolar',
      endTitle: 'Observaciones',
    });

    if (!chunkFamilySchoolContext) return undefined;

    const chunkFamilyContext = extractSectionByTitle({
      text: chunkFamilySchoolContext,
      startTitle: 'Describa aspectos del Contexto Familiar que:',
      endTitle: 'Describa aspectos del Contexto Escolar que:',
    });

    const chunkSchoolContext = extractSectionByTitle({
      text: chunkFamilySchoolContext,
      startTitle: 'Describa aspectos del Contexto Escolar que:',
      endTitle: 'Observaciones',
    });

    let familyContext: ContextFactors = { difficulties: '', strengths: '' };
    let schoolContext: ContextFactors = { difficulties: '', strengths: '' };

    if (chunkFamilyContext) {
      familyContext = this.getContext(chunkFamilyContext);
    }

    if (chunkSchoolContext) {
      schoolContext = this.getContext(chunkSchoolContext);
    }

    return { family: familyContext, school: schoolContext };
  }

  private static getContext(text: string): ContextFactors {
    const chunkStrengths = extractSectionByTitle({
      text: text,
      startTitle: 'Favorecen el aprendizaje:',
      endTitle: 'Dificultan el aprendizaje:',
    });
    const chunkDifficulties = extractSectionByTitle({
      text: text,
      startTitle: 'Dificultan el aprendizaje:',
    });

    return {
      strengths: normalizeWhitespace(chunkStrengths ?? ''),
      difficulties: normalizeWhitespace(chunkDifficulties ?? ''),
    };
  }
}
