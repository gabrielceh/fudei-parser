import { ObservationsSummaryMapper } from "../../../src/sections/summary/mappers/observations-summary.mapper";

describe("ObservationsSummaryMapper", () => {
  it("should extract and normalize observations text", () => {
    const text = `
      Contexto Familiar y Escolar
      Texto previo

      Observaciones
      El estudiante muestra
      avances significativos   durante el semestre,
      con   buena disposición al aprendizaje.
    `;

    const result = ObservationsSummaryMapper.map(text);

    expect(result).toBe(
      "El estudiante muestra avances significativos durante el semestre, con buena disposición al aprendizaje."
    );
  });

  it("should return empty string when observations section is not found", () => {
    const text = `
      Texto sin observaciones
    `;

    const result = ObservationsSummaryMapper.map(text);

    expect(result).toBe("");
  });

  it("should return empty string when observations section exists but has no content", () => {
    const text = `
      Observaciones
    `;

    const result = ObservationsSummaryMapper.map(text);

    expect(result).toBe("");
  });
});

