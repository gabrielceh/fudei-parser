import { LanguageDomainMapper } from '../../../src/sections/nee-identification/mappers/language-domain.mapper';

describe('LanguageDomainMapper', () => {
  it('should map language domain correctly', () => {
    const text = `
      Ámbito Lenguaje
      some content
      Ámbito Comunicación
    `;

    const result = LanguageDomainMapper.map(text);

    expect(result).toBeDefined();
  });

  it('should return undefined if section is not found', () => {
    const text = `
      Other content
    `;

    const result = LanguageDomainMapper.map(text);

    expect(result).toBeUndefined();
  });
});
