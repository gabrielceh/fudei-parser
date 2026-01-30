import { extractSectionByTitle } from "../../helpers/extract-section-by-table.helper";
import { AnamnesisInfoMapper } from "./mappers/anamnesis-info.mapper";
import { DiagnosisInfoMapper } from "./mappers/diagnosis-info.mapper";
import { FamilySchoolContextMapper } from "./mappers/family-school-context.mapper";
import { HealthAssessmentMapper } from "./mappers/health-assessment.mapper";
import { MultidisciplinaryTeamMapper } from "./mappers/multidisciplinary-team.mapper";
import { ObservationsSummaryMapper } from "./mappers/observations-summary.mapper";
import { PsychoeducationalAssessmentMapper } from "./mappers/psycho-educational-assessment.mapper copy";
import { Summary } from "./models/summary.model";


export const summarySection = (text:string):Summary | undefined => {
  const textNormalized = text.replace(/\r/g, "");

  const sumamrySectionText = extractSectionByTitle({
    text: textNormalized,
    startTitle: "II RESUMEN DEL PROCESO DE EVALUACION INTEGRAL E INTERDISCIPLINARIA",
    endTitle: "III IDENTIFICACIÓN DE NEE",
  })

  if(!sumamrySectionText) return undefined;
  
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