import { WithOther } from "../types/with-other.interface";

export interface LanguageDomain extends WithOther {
  phonological: LanguageLevel;
  morphosyntactic: LanguageLevel;
  semantic: LanguageLevel;
  pragmatic: LanguageLevel;
}

export interface LanguageLevel {
  oral: boolean;
  written: boolean;
  signLanguage: boolean;
}

