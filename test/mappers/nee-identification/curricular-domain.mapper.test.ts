import { CurricularDomainMapper } from "../../../src/sections/nee-identification/mappers/curricular-domain.mapper";

describe("CurricularDomainMapper", () => {
    it("should map curricular domain correctly", () => {
        const text = `
      Ámbito Curricular
      Indique en qué asignaturas el/la estudiante requiere apoyo:
      Matemáticas, Lenguaje
      Ámbito Familiar
    `;

        const result = CurricularDomainMapper.map(text);

        expect(result).toBeDefined();
        expect(result).toContain("Matemáticas, Lenguaje");
    });

    it("should return undefined if section is not found", () => {
        const text = `
      Other content
    `;

        const result = CurricularDomainMapper.map(text);

        expect(result).toBeUndefined();
    });
});
