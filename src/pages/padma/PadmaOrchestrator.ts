import { PadmaAgent, PadmaContext, PadmaIntent, PadmaResponse } from "./PadmaTypes";
import { MembershipAgent } from "./agents/MembershipAgent";
import { EventsAgent } from "./agents/EventsAgent";
import { YouthAgent } from "./agents/YouthAgent";
import { DonationAgent } from "./agents/DonationAgent";

export class PadmaOrchestrator {
  private agents: PadmaAgent[];

  constructor() {
    this.agents = [
      new MembershipAgent(),
      new EventsAgent(),
      new YouthAgent(),
      new DonationAgent(),
    ];
  }

  private detectIntent(message: string): PadmaIntent {
    const text = message.toLowerCase();

    if (text.includes("membership")) return "membership";
    if (text.includes("event")) return "events";
    if (text.includes("youth")) return "youth";
    if (text.includes("donate") || text.includes("donation")) return "donation";

    return "unknown";
  }

  async handleMessage(context: PadmaContext): Promise<PadmaResponse> {
    const intent = this.detectIntent(context.message);

    const agent = this.agents.find((a) => a.canHandle(intent));

    if (!agent) {
      return {
        success: false,
        message: "I'm not sure how to help with that yet.",
      };
    }

    return agent.execute(context);
  }
}