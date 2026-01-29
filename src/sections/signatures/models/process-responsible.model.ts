import { Signatory } from "./signatory.model";

export interface ProcessResponsible extends Signatory {
  profession: string;
  position: string;
}
