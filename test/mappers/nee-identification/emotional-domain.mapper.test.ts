import { EmotionalDomainMapper } from "../../../src/sections/nee-identification/mappers/emotional-domain.mapper";

describe("EmotionalDomainMapper", () => {
    it("should map emotional domain correctly", () => {
        const text = `
      Ámbito Emocional
      some content
      Ámbito Curricular
    `;

        const result = EmotionalDomainMapper.map(text);

        expect(result).toBeDefined();
    });

    it("should return undefined if section is not found", () => {
        const text = `
      Other content
    `;

        const result = EmotionalDomainMapper.map(text);

        expect(result).toBeUndefined();
    });
});
