import { extractSectionByTitle } from '@src/helpers/extract-section-by-table.helper';
import { match } from '@src/helpers/match.helper';
import { normalizeWhitespace } from '@src/helpers/normalize-white-space.helper';
import { LanguageDomain } from '../models/language-domain.model';

const bool = (v?: string) => v?.toUpperCase() === 'SI';

export const extractLanguageDomain = (text: string): LanguageDomain => {
  const result: LanguageDomain = {
    phonological: {
      oral: false,
      written: false,
      signLanguage: false,
    },
    morphosyntactic: {
      oral: false,
      written: false,
      signLanguage: false,
    },
    semantic: {
      oral: false,
      written: false,
      signLanguage: false,
    },
    pragmatic: {
      oral: false,
      written: false,
      signLanguage: false,
    },
    other: '',
  };

  // 🔹 Nivel Fonológico:
  const phonologicalText = extractSectionByTitle({
    text: text,
    startTitle: 'Nivel Fonológico:',
    endTitle: 'Nivel',
  });
  if (phonologicalText) {
    const responses = divideString(phonologicalText, 2);
    result.phonological.oral = bool(responses[0]);
    result.phonological.written = bool(responses[1]);
    result.phonological.signLanguage = bool(responses[2]);
  }

  // 🔹 Nivel Morfosintáctico:
  const morphosyntacticText = extractSectionByTitle({
    text: text,
    startTitle: 'Nivel Morfosintáctico:',
    endTitle: 'Nivel',
  });
  if (morphosyntacticText) {
    const responses = divideString(morphosyntacticText, 2);
    result.morphosyntactic.oral = bool(responses[0]);
    result.morphosyntactic.written = bool(responses[1]);
    result.morphosyntactic.signLanguage = bool(responses[2]);
  }

  // 🔹 Nivel Semántico:
  const semanticText = extractSectionByTitle({
    text: text,
    startTitle: 'Nivel Semántico:',
    endTitle: 'Nivel',
  });
  if (semanticText) {
    const responses = divideString(semanticText, 2);
    result.semantic.oral = bool(responses[0]);
    result.semantic.written = bool(responses[1]);
    result.semantic.signLanguage = bool(responses[2]);
  }

  // 🔹 Nivel Pragmático:
  const pragmaticText = extractSectionByTitle({
    text: text,
    startTitle: 'Nivel Pragmático:',
    endTitle: 'Otro',
  });
  if (pragmaticText) {
    const responses = divideString(pragmaticText, 2);
    result.pragmatic.oral = bool(responses[0]);
    result.pragmatic.written = bool(responses[1]);
    result.pragmatic.signLanguage = bool(responses[2]);
  }

  // 🔹 Otro
  result.other = normalizeWhitespace(match(/Otro:\s*([\s\S]*)/i, text) || '');

  return result;
};

const divideString = (text: string, size: number) => {
  let chuncks = [];
  for (let i = 0; i < text.length; i += size) {
    chuncks.push(text.substring(i, i + size));
  }
  return chuncks;
};
