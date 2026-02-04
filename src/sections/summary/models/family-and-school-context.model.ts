export interface FamilyAndSchoolContext {
  family: ContextFactors;
  school: ContextFactors;
}

export interface ContextFactors {
  strengths?: string;
  difficulties?: string;
}
