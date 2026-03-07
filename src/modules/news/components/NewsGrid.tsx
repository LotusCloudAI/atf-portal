import { News } from "../types/News";
import NewsCard from "./NewsCard";
import React from "react"; // Added React import for memo

interface Props {
  articles: News[];
}

const NewsGrid = ({ articles }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article) => (
        <NewsCard key={article.id} article={article} />
      ))}
    </div>
  );
};

export default React.memo(NewsGrid);
