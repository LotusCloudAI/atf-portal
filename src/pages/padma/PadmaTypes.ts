export type PadmaIntent =
  | "membership"
  | "events"
  | "youth"
  | "donation"
  | "unknown";

export interface PadmaContext {
  userId?: string;
  message: string;
  language?: "EN" | "TE";
}

export interface PadmaResponse {
  success: boolean;
  message: string;
  nextStep?: string;
}

export interface PadmaAgent {
  name: string;
  canHandle(intent: PadmaIntent): boolean;
  execute(context: PadmaContext): Promise<PadmaResponse>;
}