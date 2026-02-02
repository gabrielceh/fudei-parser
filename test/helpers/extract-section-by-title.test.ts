import { extractSectionByTitle } from "../../src/helpers/extract-section-by-table.helper";

describe('extractSectionByTitle', () => {
   it('should extract the text between startTitle and endTitle', () => {
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

  it('should extract from startTitle to end if endTitle is not passed', () => {
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

  it('should return undefined if startTitle is not found in the text', () => {
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


  it('should ignore spaces in startTitle and endTitle', () => {
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