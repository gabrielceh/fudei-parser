import { CommunicationDomainMapper } from '../../../src/sections/nee-identification/mappers/communication-domain.mapper';

describe('CommunicationDomainMapper', () => {
  it('should map communication domain correctly', () => {
    const text = `
      Ámbito Comunicación
      some content
      Ámbito Sensoperceptivo
    `;

    const result = CommunicationDomainMapper.map(text);

    expect(result).toBeDefined();
  });

  it('should return undefined if section is not found', () => {
    const text = `
      Other content
    `;

    const result = CommunicationDomainMapper.map(text);

    expect(result).toBeUndefined();
  });
});
