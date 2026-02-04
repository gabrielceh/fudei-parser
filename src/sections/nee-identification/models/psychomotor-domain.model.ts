import { WithOther } from '../types/with-other.interface';

export interface PsychomotorDomain extends WithOther {
  fineMotor: boolean;
  grossMotor: boolean;
  development: PsychomotorDevelopment;
}

export interface PsychomotorDevelopment {
  bodySchema: boolean;
  visoManualCoordination: boolean;
  laterality: boolean;
  positioning: boolean;
  spatialOrientation: boolean;
  displacement: boolean;
  temporalOrientation: boolean;
  balance: boolean;
}
