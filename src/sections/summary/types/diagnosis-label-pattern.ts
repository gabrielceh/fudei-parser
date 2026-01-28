import { DiagnosisInfo } from "../models/diagnosis.model";

export type DiagnosisKey = keyof DiagnosisInfo;

export type DiagnosisLabelPattern = {
  key: DiagnosisKey;
  pattern: string;
};