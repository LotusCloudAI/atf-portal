import { News } from "../types/news";

export default function NewsCard({ news }: { news: News }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow">
      <img src={news.imageUrl} className="h-48 w-full object-cover" />
      <div className="p-4">
        <h3 className="font-bold text-lg">{news.title}</h3>
        <p className="text-sm text-gray-600 mt-2">{news.summary}</p>
      </div>
    </div>
  );
}
