import { extractSectionByTitle } from '@src/helpers/extract-section-by-table.helper';
import { SchoolDirector } from '../models/school-director.model';

export const extractSchoolDirector = (text: string): SchoolDirector => {
  const result: SchoolDirector = {
    fullName: '',
    phone: '',
    email: '',
  };

  // 🔹 Nombre y Apellidos
  result.fullName =
    extractSectionByTitle({
      text: text,
      startTitle: 'Nombre y Apellidos:',
      endTitle: 'Teléfono:',
    }) ?? '';
  // 🔹 Teléfono
  result.phone =
    extractSectionByTitle({
      text: text,
      startTitle: 'Teléfono:',
      endTitle: 'Correo electrónico:',
    }) ?? '';
  // 🔹 Correo Electrónico
  result.email =
    extractSectionByTitle({
      text: text,
      startTitle: 'Correo electrónico:',
    }) ?? '';

  return result;
};
