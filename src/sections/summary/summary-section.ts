import { DiagnosisInfoMapper } from "./mappers/diagnosis-info.mapper";
import { MultidisciplinaryTeamMapper } from "./mappers/multidisciplinary-team.mapper";


export const summarySection = (text:string) => {
  const sumamrySectionText = text
    .split("II RESUMEN DEL PROCESO DE EVALUACION INTEGRAL E INTERDISCIPLINARIA")[1]
    .split("III IDENTIFICACIÓN DE NEE")[0]
  
  const diagnosisInfo = DiagnosisInfoMapper.map(sumamrySectionText);
  const multidisciplinaryTeam = MultidisciplinaryTeamMapper.map(sumamrySectionText);

  console.log({diagnosisInfo, multidisciplinaryTeam});
  

}