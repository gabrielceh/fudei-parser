import { AffectiveSocialDomainMapper } from "../../../src/sections/nee-identification/mappers/affective-social-domain.mapper";

describe("AffectiveSocialDomainMapper", () => {
    it("should map affective social domain correctly", () => {
        const text = `
      Ámbito Afectivo y Social
      some content
      Ámbito Emocional
    `;

        const result = AffectiveSocialDomainMapper.map(text);

        expect(result).toBeDefined();
    });

    it("should return undefined if section is not found", () => {
        const text = `
      Other content
    `;

        const result = AffectiveSocialDomainMapper.map(text);

        expect(result).toBeUndefined();
    });
});
