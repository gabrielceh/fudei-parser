export interface RequiredProfessionals {
  specialEducationTeacher: ProfessionalRequirement; // Mención
  subjectTeacher: ProfessionalRequirement;          // Asignatura
  psychopedagogue: ProfessionalRequirement;
  deafCoEducator: ProfessionalRequirement;
  signLanguageInterpreter: ProfessionalRequirement;
  psychologist: ProfessionalRequirement;
  speechTherapist: ProfessionalRequirement;
  occupationalTherapist: ProfessionalRequirement;
  kinesiologist: ProfessionalRequirement;
  other: ProfessionalRequirement;
  observations: string;                    // Profesión
}

export interface ProfessionalRequirement {
  required: boolean;
  detail?: string | null;
}

