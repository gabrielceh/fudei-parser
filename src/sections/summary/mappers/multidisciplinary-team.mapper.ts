import { extractSectionByTitle } from "@src/helpers/extract-section-by-table.helper";
import { MultidisciplinaryTeam, ProfessionalEvaluation } from "../models/multidisciplinary-team.model";
import { extractEvaluationProcesses } from "../utils/extract-evaluation-process.util";
import { extractProfessionalData } from "../utils/extract-professional-data.utils";

export class MultidisciplinaryTeamMapper {
  static map(text: string): MultidisciplinaryTeam | undefined {
    const chunkMultidisciplinaryTeam = extractSectionByTitle({
      text: text,
      startTitle: "Antecedentes de Identificación del Equipo Multidisciplinario que realizó la Evaluación Diagnóstica\\s*Integral",
      endTitle: "Antecedentes relevantes de la Anamnesis",
    });

    if(!chunkMultidisciplinaryTeam) return undefined;
    
    const chunkMandatoryProfessionals = extractSectionByTitle({
      text: chunkMultidisciplinaryTeam,
      startTitle: "Profesionales Obligatorios",
      endTitle: "Otros Profesionales",
    });
    
    const chunkOtherProfessionals = extractSectionByTitle({
      text: chunkMultidisciplinaryTeam,
      startTitle: "Otros Profesionales",
    });

    const mandatoryProfessionals = chunkMandatoryProfessionals 
      ? this.mapProfessionalEvaluation(chunkMandatoryProfessionals)
      : undefined;
    const otherProfessionals = chunkOtherProfessionals
      ? this.mapProfessionalEvaluation(chunkOtherProfessionals)
      : undefined;

    return {
      mandatoryProfessionals: mandatoryProfessionals,
      otherProfessionals: otherProfessionals,
    };
  }

  private static mapProfessionalEvaluation(text: string):ProfessionalEvaluation[] {
    const professionalsArray = text.split("Datos Profesional").filter(Boolean);
    const professionals = professionalsArray

    return professionals.map(this.mapProfessional);
  }


  private static mapProfessional(text: string):ProfessionalEvaluation {
    const professionalDataText = extractSectionByTitle({
      text: text,
      startTitle: "",
      endTitle: "Procesos e instrumentos Implementados por el profesional",
    }) ?? "";

    const processText = extractSectionByTitle({
      text: text,
      startTitle: "Procesos e instrumentos Implementados por el profesional",
    }) ?? "";

    const professionalData = extractProfessionalData(professionalDataText);

    const processes = extractEvaluationProcesses(processText);

    return {
      professional:professionalData,
      processes: {
        anamnesis: processes.anamnesis,
        interview: processes.interview,
        interviewTarget: processes.interviewTarget ?? "No Registra",
        observation: processes.observation ,
        standardizedInstruments: processes.standardizedInstruments ,
        standardizedInstrumentsDetails: processes.standardizedInstrumentsDetails ?? "No Registra",
        healthExam: processes.healthExam,
        diagnosis: processes.diagnosis,
        evaluationReport: processes.evaluationReport,
        schoolReport: processes.schoolReport,
        healthStatusReport: processes.healthStatusReport,
        other: processes.other, 
        otherDetails: processes.otherDetails ?? "No Registra",
      }
    }
    
  }
}