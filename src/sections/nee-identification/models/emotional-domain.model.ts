import { WithOther } from '../types/with-other.interface';

export interface EmotionalDomain extends WithOther {
  emotionIdentification: boolean;
  emotionControl: boolean;
  emotionExpression: boolean;
}
