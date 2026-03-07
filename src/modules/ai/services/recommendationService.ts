import { mockNews } from "../../news/data/mockNews";
import { Recommendation } from "../types/Recommendation";

export const generateRecommendations = (
  currentArticleId: string
): Recommendation[] => {
  // First, attempt to get specific recommendations
  const results = mockNews
    .filter((n) => n.id !== currentArticleId)
    .slice(0, 5)
    .map((n) => ({
      id: n.id,
      score: Math.random(),
      reason: "Similar interest",
    }));

  // If no recommendations are found, return the fallback "Popular content"
  if (!results.length) {
    return mockNews.slice(0, 3).map((n) => ({
      id: n.id,
      score: 0.5,
      reason: "Popular content",
    }));
  }

  return results;
};