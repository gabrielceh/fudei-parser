import { extractSectionByTitle } from '@src/helpers/extract-section-by-table.helper';
import { EstablishmenteGeneralBackgroundMapper } from './mappers/establishmente-general-background.mapper';
import { StudentGeneralBackgroundMapper } from './mappers/student-general-background.mapper';
import { GeneralBackground } from './models/general-background.interface';

export const generalBackgroundSection = (text: string): GeneralBackground | undefined => {
  const textNormalized = text.replace(/\r/g, '');
  const generalBackgroundSectionText = extractSectionByTitle({
    text: textNormalized,
    startTitle: 'I ANTECEDENTES GENERALES',
    endTitle: 'II RESUMEN DEL PROCESO',
  });

  if (!generalBackgroundSectionText) return undefined;

  const student = StudentGeneralBackgroundMapper.map(generalBackgroundSectionText);
  const establishment = EstablishmenteGeneralBackgroundMapper.map(generalBackgroundSectionText);

  return { student, establishment };
};
