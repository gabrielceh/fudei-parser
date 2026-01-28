import { AnamnesisInfoMapper } from "./mappers/anamnesis-info.mapper";
import { DiagnosisInfoMapper } from "./mappers/diagnosis-info.mapper";
import { MultidisciplinaryTeamMapper } from "./mappers/multidisciplinary-team.mapper";
import { Summary } from "./models/summary.model";


export const summarySection = (text:string):Summary => {
  const sumamrySectionText = text
    .split("II RESUMEN DEL PROCESO DE EVALUACION INTEGRAL E INTERDISCIPLINARIA")[1]
    .split("III IDENTIFICACIÓN DE NEE")[0]
  
  const diagnosis = DiagnosisInfoMapper.map(sumamrySectionText);
  const multidisciplinaryTeam = MultidisciplinaryTeamMapper.map(sumamrySectionText);
  const anamnesis = AnamnesisInfoMapper.map(sumamrySectionText);

  return({
    diagnosis, 
    multidisciplinaryTeam,
    anamnesis,
  });
  

}