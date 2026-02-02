import { RequiredProfessionalsMapper } from "../../../src/sections/nee-identification/mappers/required-professionals.mapper";

describe("RequiredProfessionalsMapper", () => {
    it("should map required professionals correctly", () => {
        const text = `
      Profesionales Requeridos por el Estudiante
      some content
      Requerimiento de Adecuaciones a los Objetivos de Aprendizaje
    `;

        const result = RequiredProfessionalsMapper.map(text);

        expect(result).toBeDefined();
    });

    it("should return undefined if section is not found", () => {
        const text = `
      Other content
    `;

        const result = RequiredProfessionalsMapper.map(text);

        expect(result).toBeUndefined();
    });
});
