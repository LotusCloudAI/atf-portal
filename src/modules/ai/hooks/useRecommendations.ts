import { useEffect, useState } from "react";
import { generateRecommendations } from "../services/recommendationService";
import { Recommendation } from "../types/Recommendation";

export const useRecommendations = (articleId: string) => {
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);

  useEffect(() => {
    if (!articleId) return;

    const results = generateRecommendations(articleId);
    setRecommendations(results);
  }, [articleId]);

  return recommendations;
};
