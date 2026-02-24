import { PadmaAgent, PadmaContext, PadmaIntent, PadmaResponse } from "../PadmaTypes";

export class MembershipAgent implements PadmaAgent {
  name = "MembershipAgent";

  canHandle(intent: PadmaIntent): boolean {
    return intent === "membership";
  }

  async execute(context: PadmaContext): Promise<PadmaResponse> {
    return {
      success: true,
      message: "I can help you with membership registration and status inquiries.",
      nextStep: "/membership",
    };
  }
}