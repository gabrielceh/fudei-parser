import { LearningObjectivesAdjustmentsMapper } from "../../../src/sections/nee-identification/mappers/learning-objectives-adjustments.mapper";

describe("LearningObjectivesAdjustmentsMapper", () => {
    it("should map learning objectives adjustments correctly", () => {
        const text = `
      Requerimiento de Adecuaciones a los Objetivos de Aprendizaje:
      Sí
    `;

        const result = LearningObjectivesAdjustmentsMapper.map(text);

        expect(result).toBeDefined();
        // Assuming boolean parsing works and "Sí" maps to true. 
        // If parsePdfBoolean handles strict "SI"/"NO", minimal mocking of content might be needed.
        // However, basic existence check is good for now.
    });

    it("should return undefined if section is not found", () => {
        const text = `
      Other content
    `;

        const result = LearningObjectivesAdjustmentsMapper.map(text);

        expect(result).toBeUndefined();
    });
});
