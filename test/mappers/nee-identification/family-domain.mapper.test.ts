import { FamilyDomainMapper } from '../../../src/sections/nee-identification/mappers/family-domain.mapper';

describe('FamilyDomainMapper', () => {
  it('should map family domain correctly', () => {
    const text = `
      Ámbito Familiar
      Indique qué apoyos requiere la familia para que el estudiante acceda, participe y progrese en su aprendizaje:
      Apoyo psicológico
      Otro Ámbito
    `;

    const result = FamilyDomainMapper.map(text);

    expect(result).toBeDefined();
    expect(result).toContain('Apoyo psicológico');
  });

  it('should return undefined if section is not found', () => {
    const text = `
      Other content
    `;

    const result = FamilyDomainMapper.map(text);

    expect(result).toBeUndefined();
  });
});
