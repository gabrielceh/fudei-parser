import { extractDiagnosis } from "../../../src/sections/summary/utils/extratc-diagnosis.utils";

describe("extractDiagnosis", () => {
  it("should extract full diagnosis information correctly", () => {
    const text = `
      NEE: NEE
      Diagnóstico:
      Trastorno específico del aprendizaje
      Tipo o Grado: Moderado
      Fecha de Emisión del Diagnóstico: 01-03-2023
      Fecha Consentimiento Familia: 10-03-2023
      Fecha próxima revaluación: 01-03-2025

      Síndrome asociado al diagnóstico:
      Síndrome:
      No presenta

      Describa y fundamente las razones de incluir al estudiante en esta categoría::
      El estudiante presenta dificultades persistentes en lectura y escritura.
    `;

    const result = extractDiagnosis(text);

    expect(result).toEqual({
      neeType: "NEE",
      diagnosis: "Trastorno específico del aprendizaje",
      degreeOrType: "Moderado",
      diagnosisIssueDate: "01-03-2023",
      familyConsentDate: "10-03-2023",
      nextReevaluationDate: "01-03-2025",
      associatedSyndrome: "No presenta",
      justification:
        "El estudiante presenta dificultades persistentes en lectura y escritura.",
    });
  });

  it("should set associatedSyndrome as empty string when section is missing", () => {
    const text = `
      NEE: NEET
      Diagnóstico: Dificultades transitorias
      Tipo o Grado: Leve
      Fecha de Emisión del Diagnóstico: 05-05-2024
      Fecha Consentimiento Familia: 10-05-2024
      Fecha próxima revaluación: 05-05-2026

      Describa y fundamente las razones de incluir al estudiante en esta categoría::
      Caso en observación.
    `;

    const result = extractDiagnosis(text);

    expect(result.associatedSyndrome).toBe("");
  });

    it("should return empty strings when values are missing", () => {
    const text = `
      NEE:
      Diagnóstico:
    `;

    const result = extractDiagnosis(text);

    expect(result).toEqual({
      neeType: "",
      diagnosis: "",
      degreeOrType: "",
      diagnosisIssueDate: "",
      familyConsentDate: "",
      nextReevaluationDate: "",
      associatedSyndrome: "",
      justification: "",
    });
  });
});


