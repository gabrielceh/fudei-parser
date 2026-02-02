import { AnamnesisInfoMapper } from "../../../src/sections/summary/mappers/anamnesis-info.mapper";

describe("AnamnesisInfoMapper", () => {
  it("should map anamnesis information correctly", () => {
    const text = `
      I. ANTECEDENTES GENERALES

      Antecedentes relevantes de la Anamnesis
      que impacte en el aprendizaje, según datos recogidos en la entrevista de la Anamnesis:
      El estudiante presenta dificultades
      en la atención sostenida y memoria de trabajo.

      Si el o la estudiante no es usuario habitual del español, consigne el nivel de español que maneja tanto en la
      comprensión como en la expresión oral y/o escrita:
      Nivel intermedio con buena comprensión oral
      pero dificultades en la expresión escrita.

      Valoración de Salud
      Sin observaciones relevantes.
    `;

    const result = AnamnesisInfoMapper.map(text);

    expect(result).toEqual({
      relevantBackground:
        "El estudiante presenta dificultades en la atención sostenida y memoria de trabajo.",
      spanishLanguageLevel:
        "Nivel intermedio con buena comprensión oral pero dificultades en la expresión escrita.",
    });
  });

  it("should return undefined if anamnesis section is not found", () => {
    const text = `
      Texto sin la sección esperada
    `;

    const result = AnamnesisInfoMapper.map(text);

    expect(result).toBeUndefined();
  });

    it("should return empty strings when internal sections are missing", () => {
    const text = `
      Antecedentes relevantes de la Anamnesis
      Texto general sin subtítulos claros
      Valoración de Salud
    `;

    const result = AnamnesisInfoMapper.map(text);

    expect(result).toEqual({
      relevantBackground: "",
      spanishLanguageLevel: "",
    });
  });
});


