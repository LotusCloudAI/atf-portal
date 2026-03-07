export interface Subscription {
  userId: string;
  plan: "free" | "premium-monthly" | "premium-annual" | "lifetime";
  expiresAt?: string;
}
