import { StudentIdentification } from '../models/general-background.interface';

export type StudentKey = keyof StudentIdentification;

export type StudentLabelPattern = {
  key: StudentKey;
  pattern: string;
};
