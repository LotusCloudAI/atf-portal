import { PadmaAgent, PadmaContext, PadmaIntent, PadmaResponse } from "../PadmaTypes";

export class DonationAgent implements PadmaAgent {
  name = "DonationAgent";

  canHandle(intent: PadmaIntent): boolean {
    return intent === "donation";
  }

  async execute(context: PadmaContext): Promise<PadmaResponse> {
    return {
      success: true,
      message: "I can help you make donations and provide tax receipt details.",
      nextStep: "/donate",
    };
  }
}