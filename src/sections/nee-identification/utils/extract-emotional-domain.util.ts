import { match } from '@src/helpers/match.helper';
import { normalizeWhitespace } from '@src/helpers/normalize-white-space.helper';
import { EmotionalDomain } from '../models/emotional-domain.model';

const bool = (v?: string) => v?.toUpperCase() === 'SI';

export const extractEmotionalDomain = (text: string): EmotionalDomain => {
  const result: EmotionalDomain = {
    emotionIdentification: false,
    emotionControl: false,
    emotionExpression: false,
    other: '',
  };

  // 🔹 Identificación de Emociones
  result.emotionIdentification = bool(match(/Identificación de Emociones:\s*(SI|NO)/i, text));
  // 🔹 Control de Emociones
  result.emotionControl = bool(match(/Control de Emociones:\s*(SI|NO)/i, text));
  // 🔹 Expresión de Emociones
  result.emotionExpression = bool(match(/Expresión de Emociones:\s*(SI|NO)/i, text));

  // 🔹 Otro
  result.other = normalizeWhitespace(match(/Otro:\s*([\s\S]*)/i, text) || '');

  return result;
};
