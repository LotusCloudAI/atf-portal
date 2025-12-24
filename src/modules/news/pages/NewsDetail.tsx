import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getNewsById } from "../services/newsService";
import { News } from "../types/news";

export default function NewsDetail() {
  const { id } = useParams();
  const [news, setNews] = useState<News | null>(null);

  useEffect(() => {
    if (id) getNewsById(id).then(setNews);
  }, [id]);

  if (!news) return null;

  return (
    <div>
      <h1 className="text-2xl font-bold">{news.title}</h1>
      <img src={news.imageUrl} className="my-4" />
      <p>{news.content}</p>
    </div>
  );
}