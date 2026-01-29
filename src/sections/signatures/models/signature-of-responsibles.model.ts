import { ProcessResponsible } from "./process-responsible.model";
import { SchoolDirector } from "./school-director.model";

export interface SignatureOfResponsibles {
  processResponsible?: ProcessResponsible;
  schoolDirector?: SchoolDirector;
}
