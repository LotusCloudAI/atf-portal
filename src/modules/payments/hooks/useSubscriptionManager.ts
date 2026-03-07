import { useState } from "react";

export const useSubscriptionManager = () => {
  const [subscription, setSubscription] = useState({
    plan: "free"
  });

  const upgrade = (plan: string) => {
    setSubscription({ plan });
  };

  return { subscription, upgrade };
};
