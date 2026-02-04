import { match } from '@src/helpers/match.helper';
import { normalizeWhitespace } from '@src/helpers/normalize-white-space.helper';
import { CognitiveDomain } from '../models/cognitive-domain.model';

const bool = (v?: string) => v?.toUpperCase() === 'SI';

export const extractCognitiveDomain = (text: string): CognitiveDomain => {
  const result: CognitiveDomain = {
    attention: {
      sustained: false,
      selective: false,
      processingSpeed: false,
    },
    memory: {
      shortTerm: false,
      mediumTerm: false,
      longTerm: false,
    },
    executiveFunctions: {
      workingMemory: false,
      planning: false,
      reasoning: false,
      flexibility: false,
      problemSolving: false,
      other: '',
    },
  };

  // 🔹 Atención sostenida
  result.attention.sustained = bool(match(/Sostenida:\s*(SI|NO)/i, text));
  // 🔹 Atencion selectiva
  result.attention.selective = bool(match(/Selectiva:\s*(SI|NO)/i, text));
  // 🔹 Atencion velocidad de procesamiento
  result.attention.processingSpeed = bool(match(/Velocidad de Procesamiento:\s*(SI|NO)/i, text));

  // 🔹 Memoria corto plazo
  result.memory.shortTerm = bool(match(/A corto plazo:\s*(SI|NO)/i, text));
  // 🔹 Memoria medio plazo
  result.memory.mediumTerm = bool(match(/A mediano plazo:\s*(SI|NO)/i, text));
  // 🔹 Memoria largo plazo
  result.memory.longTerm = bool(match(/A largo plazo:\s*(SI|NO)/i, text));

  // 🔹 Funciones ejecutivas memoria de trabajo
  result.executiveFunctions.workingMemory = bool(match(/Memoria de trabajo:\s*(SI|NO)/i, text));
  // 🔹 Funciones ejecutivas planificación
  result.executiveFunctions.planning = bool(match(/Planificación:\s*(SI|NO)/i, text));
  // 🔹 Funciones ejecutivas razonamiento
  result.executiveFunctions.reasoning = bool(match(/Razonamiento:\s*(SI|NO)/i, text));
  // 🔹 Funciones ejecutivas flexibilidad
  result.executiveFunctions.flexibility = bool(match(/Flexibilidad:\s*(SI|NO)/i, text));
  // 🔹 Funciones ejecutivas resolucion de problemas
  result.executiveFunctions.problemSolving = bool(
    match(/Resolución de problemas:\s*(SI|NO)/i, text),
  );
  // 🔹 Funciones ejecutivas otro
  result.executiveFunctions.other = normalizeWhitespace(match(/Otro:\s*([\s\S]*)/i, text) || '');

  return result;
};
