export interface MultidisciplinaryTeam {
  mandatoryProfessionals?: ProfessionalEvaluation[];
  otherProfessionals?: ProfessionalEvaluation[];
}

export interface ProfessionalEvaluation {
  professional?: ProfessionalInfo;
  processes?: EvaluationProcesses;
}

export interface ProfessionalInfo {
  dni: string;
  fullName: string;
  specialty: string;
  professionalRegister?: string;
  phone?: string;
  email?: string;
  otherCareer?: string;
  evaluationDate?: string;
}

export interface EvaluationProcesses {
  anamnesis?: boolean;
  interview: boolean;
  interviewTarget?: string;
  observation?: boolean;
  standardizedInstruments: boolean;
  standardizedInstrumentsDetails?: string;
  healthExam?: boolean;
  diagnosis?: boolean;
  evaluationReport?: boolean;
  schoolReport?: boolean;
  healthStatusReport?: boolean;
  other: boolean;
  otherDetails?: string;
}
