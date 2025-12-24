import { useEffect, useState } from "react";
import { getAllNews } from "../services/newsService";
import NewsCard from "../components/NewsCard";
import { News } from "../types/news";

export default function NewsList() {
  const [news, setNews] = useState<News[]>([]);

  useEffect(() => {
    getAllNews().then(setNews);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {news.map(n => <NewsCard key={n.id} news={n} />)}
    </div>
  );
}