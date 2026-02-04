import { OtherDomainMapper } from '../../../src/sections/nee-identification/mappers/other-domain.mapper';

describe('OtherDomainMapper', () => {
  it('should map other domain correctly', () => {
    const text = `
      Otro Ámbito
      some content
      Registre fortalezas personales del estudiante
    `;

    const result = OtherDomainMapper.map(text);

    expect(result).toBeDefined();
    expect(result).toContain('some content');
  });

  it('should return undefined if section is not found', () => {
    const text = `
      Other content
    `;

    const result = OtherDomainMapper.map(text);

    expect(result).toBeUndefined();
  });
});
