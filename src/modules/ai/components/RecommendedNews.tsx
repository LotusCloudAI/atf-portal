import { useRecommendations } from "../hooks/useRecommendations";
import { mockNews } from "../../news/data/mockNews";
import React from "react";
interface Props {
  articleId: string;
}

const RecommendedNews = ({ articleId }: Props) => {
  const recommendations = useRecommendations(articleId);

  return (
    <div className="mt-10">
      <h3 className="text-lg font-semibold mb-4">
        Recommended For You
      </h3>

      {recommendations.map(rec => {
        const article = mockNews.find(n => n.id === rec.id);
        if (!article) return null;

        return (
          <div key={rec.id} className="border p-3 mb-3 rounded">
            <h4 className="font-medium">{article.title}</h4>
            <p className="text-sm text-gray-500">
              {rec.reason}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default React.memo(RecommendedNews);