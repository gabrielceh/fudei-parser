import { extractTableFields } from "../../../helpers/extract-table-fields.helper";
import { MultidisciplinaryTeam, ProfessionalEvaluation } from "../models/multidisciplinary-team.model";
import { extractEvaluationProcesses } from "../utils/extract-evaluation-process.util";
import { PROFESSIONAL_FIELD_LABELS } from "../utils/professional-fileds-labels.utils";

export class MultidisciplinaryTeamMapper {
  static map(text: string): MultidisciplinaryTeam {
    const textSlitep = text
    .split("Antecedentes de Identificación del Equipo Multidisciplinario que realizó la Evaluación")[1]
    .split("Antecedentes relevantes de la Anamnesis")[0]
    .trim();

    const mandatoryProfessionalsText = textSlitep
      .split("Profesionales Obligatorios")[1]
      .split("Otros Profesionales")[0]
      .trim();
    
    const otherProfessionalsText = textSlitep
      .split("Otros Profesionales")[1]
      .trim();

    const mandatoryProfessionals = this.mapProfessionalEvaluation(mandatoryProfessionalsText);
    const otherProfessionals = this.mapProfessionalEvaluation(otherProfessionalsText);

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
    const professionalDataText = text.split("Procesos e instrumentos Implementados por el profesional")[0].trim();
    const processText = text.split("Procesos e instrumentos Implementados por el profesional")[1].trim();

    const rawProfessional = extractTableFields(professionalDataText, PROFESSIONAL_FIELD_LABELS);

    const processes = extractEvaluationProcesses(processText);

    return {
      professional:{
        dni: rawProfessional.dni ?? "",
        fullName: rawProfessional.fullName ?? "",
        specialty: rawProfessional.specialty ?? "",
        professionalRegister: rawProfessional.professionalRegister ?? "",
        phone: rawProfessional.phone ? rawProfessional.phone : undefined,
        email: rawProfessional.email ? rawProfessional.email : undefined,
        otherCareer: rawProfessional.otherCareer ? rawProfessional.otherCareer : undefined,
        evaluationDate: rawProfessional.evaluationDate ?? "",
      },
      processes: {
        anamnesis: processes.anamnesis,
        interview: processes.interview,
        interviewTarget: processes.interviewTarget ?? "No Registra",
        observation: processes.observation,
        standardizedInstruments: processes.standardizedInstruments,
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