import { AnamnesisInfo } from "./anamnesis.model";
import { DiagnosisInfo } from "./diagnosis.model";
import { FamilyAndSchoolContext } from "./family-and-school-context.model";
import { HealthAssessment } from "./health-assessment.model";
import { MultidisciplinaryTeam } from "./multidisciplinary-team.model";
import { PsychoeducationalAssessment } from "./psycho-educational-assessment.model";

export interface Summary {
  diagnosis: DiagnosisInfo;
  multidisciplinaryTeam: MultidisciplinaryTeam;
  anamnesis?: AnamnesisInfo;
  healthAssessment?: HealthAssessment;
  psychoeducationalAssessment?: PsychoeducationalAssessment;
  familyAndSchoolContext?: FamilyAndSchoolContext;
  observations?: string;
}
