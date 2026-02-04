import { SchoolDirectorMapper } from '../../../src/sections/signatures/mappers/school-director.mapper';

describe('ProcessResponsibleMapper', () => {
  it('should extract and normalize school director text', () => {
    const text = `
      Director del Establecimiento
      Nombre y Apellidos: John Doe
      Teléfono: 1234567890
      Correo electrónico: john@doe.comRecuerde, una vez finalizado el proceso, DEBE imprimir el FUDEI
    `;

    const result = SchoolDirectorMapper.map(text);

    expect(result).toEqual({
      fullName: 'John Doe',
      phone: '1234567890',
      email: 'john@doe.com',
    });
  });

  it('should return undefined if school director section is not found', () => {
    const text = `
      Texto sin la sección esperada
    `;

    const result = SchoolDirectorMapper.map(text);

    expect(result).toBeUndefined();
  });

  it('should return empty strings when some fields are missing', () => {
    const text = `
      Director del Establecimiento
      Nombre y Apellidos: John Doe
    `;

    const result = SchoolDirectorMapper.map(text);

    expect(result).toEqual({
      fullName: 'John Doe',
      phone: '',
      email: '',
    });
  });
});
