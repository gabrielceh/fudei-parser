import { PsychomotorDomainMapper } from '../../../src/sections/nee-identification/mappers/psychomotor-domain.mapper';

describe('PsychomotorDomainMapper', () => {
  it('should map psychomotor domain correctly', () => {
    const text = `
      Ámbito Psicomotor
      some content
      Ámbito Afectivo y Social
    `;

    const result = PsychomotorDomainMapper.map(text);

    expect(result).toBeDefined();
  });

  it('should return undefined if section is not found', () => {
    const text = `
      Other content
    `;

    const result = PsychomotorDomainMapper.map(text);

    expect(result).toBeUndefined();
  });
});
