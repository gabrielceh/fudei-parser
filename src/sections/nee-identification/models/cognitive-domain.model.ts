import { WithOther } from '../types/with-other.interface';

export interface CognitiveDomain {
  attention: CognitiveAttention;
  memory: CognitiveMemory;
  executiveFunctions: CognitiveExecutiveFunctions;
}

export interface CognitiveAttention {
  sustained: boolean;
  selective: boolean;
  processingSpeed: boolean;
}

export interface CognitiveMemory {
  shortTerm: boolean;
  mediumTerm: boolean;
  longTerm: boolean;
}

export interface CognitiveExecutiveFunctions extends WithOther {
  workingMemory: boolean;
  planning: boolean;
  reasoning: boolean;
  flexibility: boolean;
  problemSolving: boolean;
}
