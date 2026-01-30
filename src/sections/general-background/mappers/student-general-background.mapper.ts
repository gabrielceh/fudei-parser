import { parsePdfBoolean } from "../../../helpers/parse-pdf-boolean";
import { STUDENT_FIELD_LABELS } from "../utils/student-field-labels.util";
import { extractTableFields } from "../../../helpers/extract-table-fields.helper";
import { StudentIdentification } from "../models/general-background.interface";
import { extractSectionByTitle } from "../../../helpers/extract-section-by-table.helper";



export class StudentGeneralBackgroundMapper {

  static map(text: string): StudentIdentification | undefined {
    const chunckStudentBackground = extractSectionByTitle({
      text: text,
      startTitle: "Antecedentes de Identificación del Estudiante",
      endTitle: "Antecedentes de Identificación del Establecimiento",
    })

    if(!chunckStudentBackground) return undefined;

    const raw = extractTableFields(chunckStudentBackground, STUDENT_FIELD_LABELS);
    
    return {
      fullName: raw.fullName ?? "",
      nationality: raw.nationality ?? "",
      dni: raw.dni ?? "",
      address: raw.address,
      gender: raw.gender ?? "",
      region: raw.region ?? "",
      birthDate: raw.birthDate ?? "",
      commune: raw.commune ?? "",
      age: raw.age ?? "",
      admissionCourse: raw.admissionCourse ?? "",
      currentCourse: raw.currentCourse ?? "",

      isPriorityStudent: parsePdfBoolean(raw.isPriorityStudent),
      isPreferredStudent: parsePdfBoolean(raw.isPreferredStudent),
      isJunaebBeneficiary: parsePdfBoolean(raw.isJunaebBeneficiary),
      hasPreviousSpecialSchoolParticipation:
        parsePdfBoolean(raw.hasPreviousSpecialSchoolParticipation),
      hasPreviousPIEParticipation:
        parsePdfBoolean(raw.hasPreviousPIEParticipation),
      previousPIEYears: raw.previousPIEYears ? Number(raw.previousPIEYears?.match(/\d+/)?.[0]) : undefined,
      isSpanishNativeLanguage:
        parsePdfBoolean(raw.isSpanishNativeLanguage)
    };
  }
}