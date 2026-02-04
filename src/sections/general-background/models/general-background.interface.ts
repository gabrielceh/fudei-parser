export interface GeneralBackground {
  student?: StudentIdentification;
  establishment?: EstablishmentIdentification;
}

export interface StudentIdentification {
  fullName: string;
  nationality: string;
  dni: string;
  address?: string;
  gender: string;
  region: string;
  birthDate: string;
  commune: string;
  age: string;
  admissionCourse: string;
  currentCourse: string;

  isPriorityStudent: boolean;
  isPreferredStudent: boolean;
  isJunaebBeneficiary: boolean;
  hasPreviousSpecialSchoolParticipation: boolean;
  hasPreviousPIEParticipation: boolean;
  previousPIEYears?: number;
  isSpanishNativeLanguage: boolean;
}

export interface EstablishmentIdentification {
  name: string;
  dependencyType: string;
  rbd: string;
  address: string;
  region: string;
  commune: string;
}
