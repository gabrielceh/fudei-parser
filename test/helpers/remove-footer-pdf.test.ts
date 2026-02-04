import { removeHeaderFooter } from '../../src/helpers/remove-footer-pdf.herlper';

describe('removeHeaderFooter', () => {
  it('should removes header and footer from text', () => {
    const input = `
      Este es el contenido antes del contenido a eliminar
      Fecha/Hora: 17-09-2024 23:13
      Fecha Cierre: 06-06-2023
      Folio: 048050142DE7E6-1
      Página: 3/6
      `;

    const result = removeHeaderFooter(input);

    expect(result).toBe(`Este es el contenido antes del contenido a eliminar`);
  });

  it('should return the text intact if there is no header/footer', () => {
    const input = 'Contenido sin encabezado ni pie';

    const result = removeHeaderFooter(input);

    expect(result).toBe('Contenido sin encabezado ni pie');
  });

  it('should handle variations of spaces and line breaks', () => {
    const input = `Fecha/Hora: 02-12-2024 10:10   Fecha Cierre: 07-05-2024   Folio: ABCD-123
      Página: 1 / 2
      Texto importante`;

    const result = removeHeaderFooter(input);

    expect(result).toBe('Texto importante');
  });
});
