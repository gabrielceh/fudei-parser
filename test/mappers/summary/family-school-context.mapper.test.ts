import { FamilySchoolContextMapper } from "../../../src/sections/summary/mappers/family-school-context.mapper";

describe("FamilySchoolContextMapper", () => {
  it("should map family and school context correctly", () => {
    const text = `
      Contexto Familiar y Escolar

      Describa aspectos del Contexto Familiar que:
      Favorecen el aprendizaje:
      Apoyo constante de la familia
      y seguimiento de tareas.

      Dificultan el aprendizaje:
      Falta de rutinas claras.

      Describa aspectos del Contexto Escolar que:
      Favorecen el aprendizaje:
      Buen clima escolar
      y apoyo del docente.

      Dificultan el aprendizaje:
      Cursos con alta cantidad de estudiantes.

      Observaciones
      Texto final
    `;

    const result = FamilySchoolContextMapper.map(text);

    expect(result).toEqual({
      family: {
        strengths: "Apoyo constante de la familia y seguimiento de tareas.",
        difficulties: "Falta de rutinas claras.",
      },
      school: {
        strengths: "Buen clima escolar y apoyo del docente.",
        difficulties: "Cursos con alta cantidad de estudiantes.",
      },
    });
  });

  it("should return undefined if main section is not found", () => {
    const text = `
      Texto sin la sección esperada
    `;

    const result = FamilySchoolContextMapper.map(text);

    expect(result).toBeUndefined();
  });

  it("should normalize empty context sections", () => {
    const text = `
      Contexto Familiar y Escolar

      Describa aspectos del Contexto Familiar que:
      Favorecen el aprendizaje:
      Dificultan el aprendizaje:

      Describa aspectos del Contexto Escolar que:
      Favorecen el aprendizaje:
      Dificultan el aprendizaje:

      Observaciones
    `;

    const result = FamilySchoolContextMapper.map(text);

    expect(result).toEqual({
      family: {
        strengths: "",
        difficulties: "",
      },
      school: {
        strengths: "",
        difficulties: "",
      },
    });
  });
});


