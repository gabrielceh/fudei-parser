import { EstablishmenteGeneralBackgroundMapper } from '../../../src/sections/general-background/mappers/establishmente-general-background.mapper';

describe('EstablishmenteGeneralBackgroundMapper', () => {
  it('should map establishment general background correctly', () => {
    const text = `
      I. ANTECEDENTES GENERALES

      Antecedentes de Identificación del Establecimiento
      Nombre del Establecimiento: Colegio San Martín
      Tipo de Dependencia: Municipal
      RBD: 12345
      Dirección: Av. Siempre Viva 742
      Región: Metropolitana
      Comuna: Santiago
    `;

    const result = EstablishmenteGeneralBackgroundMapper.map(text);

    expect(result).toEqual({
      name: 'Colegio San Martín',
      dependencyType: 'Municipal',
      rbd: '12345',
      address: 'Av. Siempre Viva 742',
      region: 'Metropolitana',
      commune: 'Santiago',
    });
  });

  it('should return undefined if establishment section is not found', () => {
    const text = `
      I. ANTECEDENTES GENERALES
      Texto cualquiera sin datos del establecimiento
    `;

    const result = EstablishmenteGeneralBackgroundMapper.map(text);

    expect(result).toBeUndefined();
  });

  it('should return empty strings when some fields are missing', () => {
    const text = `
      Antecedentes de Identificación del Establecimiento
      Nombre del Establecimiento: Colegio Incompleto
      Tipo de Dependencia: Municipal
      RBD: 99999
    `;

    const result = EstablishmenteGeneralBackgroundMapper.map(text);

    expect(result).toEqual({
      name: 'Colegio Incompleto',
      dependencyType: 'Municipal',
      rbd: '99999',
      address: '',
      region: '',
      commune: '',
    });
  });
});
