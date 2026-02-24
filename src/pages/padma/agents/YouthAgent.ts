import { PadmaAgent, PadmaContext, PadmaIntent, PadmaResponse } from "../PadmaTypes";

export class YouthAgent implements PadmaAgent {
  name = "YouthAgent";

  canHandle(intent: PadmaIntent): boolean {
    return intent === "youth";
  }

  async execute(context: PadmaContext): Promise<PadmaResponse> {
    return {
      success: true,
      message: "I can guide you through Youth competitions and programs.",
      nextStep: "/youth",
    };
  }
}