import { useParams } from "react-router-dom";
import { mockNews } from "../data/mockNews";
import { calculateReadingTime } from "../../../utils/readingTime";
import Breadcrumb from "../../../components/UI/Breadcrumb";
const NewsDetail = () => {
  const { slug } = useParams();
  const article = mockNews.find(n => n.slug === slug);
  const handleBookmark = () => {
  const bookmarks = JSON.parse(localStorage.getItem("bookmarks") || "[]");
  localStorage.setItem("bookmarks", JSON.stringify([...bookmarks, article]));
  alert("Bookmarked");};

  if (!article) return <p>Article not found</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <img
        src={article.imageUrl}
        alt={article.title}
        className="w-full h-64 object-cover rounded"
      />

      <h1 className="text-3xl font-bold mt-4">
        {article.title}
      </h1>

      <p className="text-sm text-gray-500 mt-2">
        By {article.author} • {article.createdAt} • {calculateReadingTime(article.content)}
      </p>

      <div className="mt-6 text-gray-700 leading-7">
        {article.content}
      </div>
    </div>
  );
};

export default NewsDetail;
