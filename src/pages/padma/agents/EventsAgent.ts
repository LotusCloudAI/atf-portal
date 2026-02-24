import { PadmaAgent, PadmaContext, PadmaIntent, PadmaResponse } from "../PadmaTypes";

export class EventsAgent implements PadmaAgent {
  name = "EventsAgent";

  canHandle(intent: PadmaIntent): boolean {
    return intent === "events";
  }

  async execute(context: PadmaContext): Promise<PadmaResponse> {
    return {
      success: true,
      message: "I can assist you with event registrations and event details.",
      nextStep: "/events",
    };
  }
}