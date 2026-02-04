import { CognitiveDomainMapper } from '../../../src/sections/nee-identification/mappers/cognitive-domain.mapper';

describe('CognitiveDomainMapper', () => {
  it('should map cognitive domain correctly', () => {
    const text = `
      Ámbito Cognitivo
      some content
      Ámbito Lenguaje
    `;

    const result = CognitiveDomainMapper.map(text);

    expect(result).toBeDefined();
  });

  it('should return undefined if section is not found', () => {
    const text = `
      Other content
    `;

    const result = CognitiveDomainMapper.map(text);

    expect(result).toBeUndefined();
  });
});
