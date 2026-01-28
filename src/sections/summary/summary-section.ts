import { AnamnesisInfoMapper } from "./mappers/anamnesis-info.mapper";
import { DiagnosisInfoMapper } from "./mappers/diagnosis-info.mapper";
import { FamilySchoolContextMapper } from "./mappers/family-school-context.mapper";
import { HealthAssessmentMapper } from "./mappers/health-assessment.mapper";
import { MultidisciplinaryTeamMapper } from "./mappers/multidisciplinary-team.mapper";
import { ObservationsSummaryMapper } from "./mappers/observations-summary.mapper";
import { PsychoeducationalAssessmentMapper } from "./mappers/psycho-educational-assessment.mapper copy";
import { Summary } from "./models/summary.model";


export const summarySection = (text:string):Summary => {
  const sumamrySectionText = text
    .split("II RESUMEN DEL PROCESO DE EVALUACION INTEGRAL E INTERDISCIPLINARIA")[1]
    .split("III IDENTIFICACIÓN DE NEE")[0]
  
  const diagnosis = DiagnosisInfoMapper.map(sumamrySectionText);
  const multidisciplinaryTeam = MultidisciplinaryTeamMapper.map(sumamrySectionText);
  const anamnesis = AnamnesisInfoMapper.map(sumamrySectionText);
  const healthAssessment = HealthAssessmentMapper.map(sumamrySectionText);
  const psychoeducationalAssessment = PsychoeducationalAssessmentMapper.map(sumamrySectionText);
  const familyAndSchoolContext = FamilySchoolContextMapper.map(sumamrySectionText);
  const observations = ObservationsSummaryMapper.map(sumamrySectionText);

  return({
    diagnosis, 
    multidisciplinaryTeam,
    anamnesis,
    healthAssessment,
    psychoeducationalAssessment,
    familyAndSchoolContext,
    observations,
  });
  

}