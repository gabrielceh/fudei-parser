import { extractSectionByTitle } from "../../src/helpers/extract-section-by-table.helper";

describe('extractSectionByTitle', () => {
   it('extrae el texto entre startTitle y endTitle', () => {
    const text = `
SECCIÓN I
Contenido de la sección uno
línea dos

SECCIÓN II
Contenido de la sección dos
`;

    const result = extractSectionByTitle({
      text,
      startTitle: 'SECCIÓN I',
      endTitle: 'SECCIÓN II',
    });

    expect(result).toBe(
      `Contenido de la sección uno
línea dos`
    );
  });

  it('extrae desde startTitle hasta el final si no se pasa endTitle', () => {
    const text = `
INTRO
texto inicial

DETALLE
línea uno
línea dos
línea tres
`;

    const result = extractSectionByTitle({
      text,
      startTitle: 'DETALLE',
    });

    expect(result).toBe(
      `línea uno
línea dos
línea tres`
    );
  });

  it('retorna undefined si startTitle no existe en el texto', () => {
    const text = `
SECCIÓN A
contenido
`;

    const result = extractSectionByTitle({
      text,
      startTitle: 'SECCIÓN B',
      endTitle: 'SECCIÓN C',
    });

    expect(result).toBeUndefined();
  });


  it('ignora espacios en startTitle y endTitle', () => {
    const text = `
TITULO INICIO
contenido importante
TITULO FIN
`;

    const result = extractSectionByTitle({
      text,
      startTitle: '   TITULO INICIO   ',
      endTitle: '  TITULO FIN  ',
    });

    expect(result).toBe('contenido importante');
  });



});