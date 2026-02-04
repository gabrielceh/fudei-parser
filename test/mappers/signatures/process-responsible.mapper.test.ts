import { ProcessResponsibleMapper } from '../../../src/sections/signatures/mappers/process-responsible.mapper';

describe('ProcessResponsibleMapper', () => {
  it('should extract and normalize process responsible text', () => {
    const text = `
      Profesional Responsable del Proceso
      Nombre y Apellidos: John Doe Profesión: Profesor Diferencial
      Cargo: Coordinador PIE Teléfono: 1234567890
      Correo electrónico: john@doe.com
      Director del Establecimiento
    `;

    const result = ProcessResponsibleMapper.map(text);

    expect(result).toEqual({
      fullName: 'John Doe',
      profession: 'Profesor Diferencial',
      position: 'Coordinador PIE',
      phone: '1234567890',
      email: 'john@doe.com',
    });
  });

  it('should return undefined if process responsible section is not found', () => {
    const text = `
      Texto sin la sección esperada
    `;

    const result = ProcessResponsibleMapper.map(text);

    expect(result).toBeUndefined();
  });

  it('should return empty strings when some fields are missing', () => {
    const text = `
      Profesional Responsable del Proceso
      Nombre y Apellidos: John Doe Profesión: Profesor Diferencial
      Cargo: Coordinador PIE
    `;

    const result = ProcessResponsibleMapper.map(text);

    expect(result).toEqual({
      fullName: 'John Doe',
      profession: 'Profesor Diferencial',
      position: 'Coordinador PIE',
      phone: '',
      email: '',
    });
  });
});
