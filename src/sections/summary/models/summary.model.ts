import { AnamnesisInfo } from "./anamnesis.model";
import { DiagnosisInfo } from "./diagnosis.model";
import { FamilyAndSchoolContext } from "./family-and-school-context.model";
import { MultidisciplinaryTeam } from "./multidisciplinary-team.model";

export interface Summary {
  diagnosis?: DiagnosisInfo;
  multidisciplinaryTeam?: MultidisciplinaryTeam;
  anamnesis?: AnamnesisInfo;
  healthAssessment?: string;
  psychoeducationalAssessment?: string;
  familyAndSchoolContext?: FamilyAndSchoolContext;
  observations?: string;
}
