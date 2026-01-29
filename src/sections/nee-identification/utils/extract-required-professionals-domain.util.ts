import { extractSectionByTitle } from "../../../helpers/extract-section-by-table.helper";
import { match } from "../../../helpers/match.helper";
import { RequiredProfessionals } from "../models/required-professionals.model";

const bool = (v?: string) => v?.toUpperCase() === "SI";

export const extractRequiredProfessionalsDomain = (
  text: string
): RequiredProfessionals => {
  const result: RequiredProfessionals = {
    specialEducationTeacher: {
      required: false,
      detail: "",
    },
    subjectTeacher: {
      required: false,
      detail: "",
    },
    psychopedagogue: {
      required: false,
    },
    deafCoEducator: {
      required: false,
    },
    signLanguageInterpreter: {
      required: false,
    },
    psychologist: {
      required: false,
    },
    speechTherapist: {
      required: false,
    },
    occupationalTherapist: {
      required: false,
    },
    kinesiologist: {
      required: false,
    },
    other: {
      required: false,
       detail:""
    },
    observations: "",

  };

  // 🔹 Profesor de Educación Especial/Diferencial
  result.specialEducationTeacher.required = bool(
    match(/Profesor de Educación Especial\/Diferencial:\s*(SI|NO)/i, text)
  );
  // 🔹 Profesor de Educación Especial/Diferencial Mencin
  result.specialEducationTeacher.detail = extractSectionByTitle({
    text: text,
    startTitle: "Mención:",
    endTitle: "Profesor de Asignatura:",
  })?.replace(/\s+/g, " ")?.trim() || "";

  // 🔹 Profesor de Asignatura
  result.subjectTeacher.required = bool(
    match(/Profesor de Asignatura:\s*(SI|NO)/i, text)
  );
  const chunckSubjectTeacher = extractSectionByTitle({
    text: text,
    startTitle: "Profesor de Asignatura:",
    endTitle: "Psicopedagogo:",
  })
  if(!chunckSubjectTeacher){
    result.subjectTeacher.detail = "";
  }else{
    result.subjectTeacher.detail = extractSectionByTitle({
      text: chunckSubjectTeacher,
      startTitle: "Asignatura:",
    }) ?? "";
  }
  
  // 🔹 Psicopedagogo
  result.psychopedagogue.required = bool(
    match(/Psicopedagogo:\s*(SI|NO)/i, text)
  );
  
  // 🔹 Co - Educador Sordo
  result.deafCoEducator.required = bool(
    match(/Co - Educador Sordo:\s*(SI|NO)/i, text)
  );
  
  // 🔹 Intérprete Lengua de Señas Chilena
  result.signLanguageInterpreter.required = bool(
    match(/Intérprete Lengua de Señas Chilena:\s*(SI|NO)/i, text)
  );
  
  // 🔹 Psicólogo
  result.psychologist.required = bool(
    match(/Psicólogo:\s*(SI|NO)/i, text)
  );
  
  // 🔹 Fonoaudiólogo
  result.speechTherapist.required = bool(
    match(/Fonoaudiólogo:\s*(SI|NO)/i, text)
  );
 
  // 🔹 Terapeuta ocupacional
  result.occupationalTherapist.required = bool(
    match(/Terapeuta ocupacional:\s*(SI|NO)/i, text)
  );
  
  // 🔹 Kinesiólogo
  result.kinesiologist.required = bool(
    match(/Kinesiólogo:\s*(SI|NO)/i, text)
  );
  
  // 🔹 Otro
  result.other.required = bool(
    match(/Otro:\s*(SI|NO)/i, text)
  );
  // 🔹 Otro Profesión
  result.other.detail = extractSectionByTitle({
    text: text,
    startTitle: "Profesión:",
    endTitle: "Observaciones:",
  })?.replace(/\s+/g, " ")?.trim() || "";
 
  // 🔹 Observaciones
  result.observations = match(/Observaciones:\s*([\s\S]*)/i, text)?.replace(/\s+/g, " ")?.trim() || "";


  return result;
};
