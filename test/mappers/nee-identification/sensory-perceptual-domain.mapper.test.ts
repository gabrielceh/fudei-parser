import { SensoryPerceptualDomainMapper } from '../../../src/sections/nee-identification/mappers/sensory-perceptual-domain.mapper';

describe('SensoryPerceptualDomainMapper', () => {
  it('should map sensory perceptual domain correctly', () => {
    const text = `
      Ámbito Sensoperceptivo
      some content
      Ámbito Psicomotor
    `;

    const result = SensoryPerceptualDomainMapper.map(text);

    expect(result).toBeDefined();
  });

  it('should return undefined if section is not found', () => {
    const text = `
      Other content
    `;

    const result = SensoryPerceptualDomainMapper.map(text);

    expect(result).toBeUndefined();
  });
});
