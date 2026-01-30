import { EvaluationProcesses } from "../models/multidisciplinary-team.model";

const bool = (v?: string) => {
  if(!v) return undefined;
  return v?.toUpperCase() === "SI";
}

const match = (regex: RegExp, text: string) =>
  regex.exec(text)?.[1];

export const extractEvaluationProcesses = (
  text: string
): EvaluationProcesses => {
  const result: EvaluationProcesses = {
    interview: false,
    standardizedInstruments: false,
    other: false,
  };

  // 🔹 Anamnesis
  result.anamnesis = bool(
    match(/Anamnesis:\s*(SI|NO)/i, text)
  );

  // 🔹 Entrevista
  result.interview = bool(
    match(/Entrevista:\s*(SI|NO)/i, text)
  ) ?? false;

  if (result.interview) {
    result.interviewTarget =
      match(/¿A quién\(es\)\?:\s*([^\n]+)/i, text)?.trim();
  }

  // 🔹 Observación
  result.observation = bool(
    match(/Observación:\s*(SI|NO)/i, text)
  );

  // 🔹 Instrumentos Estandarizados
  result.standardizedInstruments = bool(
    match(
      /Instrumentos Estandarizados\s*\/\s*Procedimientos:\s*(SI|NO)/i,
      text
    )
  ) ?? false;

  if (result.standardizedInstruments) {
    result.standardizedInstrumentsDetails =
      match(
        /Instrumentos Estandarizados[\s\S]*?Especificar:\s*([^\n]+)/i,
        text
      )?.trim();
  }

  // 🔹 Examen de Salud
  result.healthExam = bool(
    match(/Examen de Salud:\s*(SI|NO)/i, text)
  );

  // 🔹 Diagnóstico
  result.diagnosis = bool(
    match(/Diagnóstico:\s*(SI|NO)/i, text)
  );

  // 🔹 Informe resultados (PDF sano o roto)
  result.evaluationReport = bool
  (match(
    /Informe de resultados de la[\s\S]{0,40}?(SI|NO)/i,
    text
  ));

  // 🔹 Informe Escolar
  result.schoolReport = bool(
    match(/Informe Escolar:\s*(SI|NO)/i, text)
  );

  // 🔹 Informe Estado de Salud
  result.healthStatusReport = bool(
    match(/Informe de Estado de Salud:\s*(SI|NO)/i, text)
  );

  // 🔹 Otro (EL PROBLEMA ORIGINAL)
  result.other = bool(
    match(/Otro:\s*(SI|NO)/i, text)
  ) ?? false;

  if (result.other) {
    result.otherDetails =
      match(/Otro:\s*SI[\s\S]*?Especificar:\s*([^\n]+)/i, text)?.trim();
  }

  return result;
};
