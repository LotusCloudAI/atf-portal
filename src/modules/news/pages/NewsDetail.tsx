import { useParams } from "react-router-dom";
import { mockNews } from "../data/mockNews";
import { calculateReadingTime } from "../../../utils/readingTime";
import Breadcrumb from "../../../components/UI/Breadcrumb";
import { useEffect } from "react";
import { calculateSimilarity } from "../utils/contentSimilarity";
import { getRecommendedNews } from "../services/recommendationService";
import RecommendedNews from "../../ai/components/RecommendedNews";
import { useTranslation } from "react-i18next";

const NewsDetail = () => {
  const { slug } = useParams();
  const article = mockNews.find((n) => n.slug === slug);
  const { t } = useTranslation();
  const handleBookmark = () => {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks") || "[]");
    localStorage.setItem("bookmarks", JSON.stringify([...bookmarks, article]));
    alert("Bookmarked");
  };

  // Logic to track view counts
  useEffect(() => {
    if (!article) return;

    const views = JSON.parse(localStorage.getItem("views") || "{}");
    views[article.id] = (views[article.id] || 0) + 1;
    localStorage.setItem("views", JSON.stringify(views));
  }, [article]);

  // Logic to track reading history
  useEffect(() => {
    if (!article) return;

    const history = JSON.parse(localStorage.getItem("readingHistory") || "[]");

    const updated = [
      article.id,
      ...history.filter((id) => id !== article.id),
    ].slice(0, 20);

    localStorage.setItem("readingHistory", JSON.stringify(updated));
  }, [article]);

  if (!article) return <p className="p-6 text-center">Article not found</p>;
  useEffect(() => { 
    document.title = t("news") + " - " + article.title;}, [article, t]);
  
  useEffect(() => {
  const meta = document.querySelector("meta[name='description']");
    if (meta) {
      meta.setAttribute("content",article.summary);}}, [article]);


  const related = mockNews
    .filter((n) => n.id !== article.id)
    .sort(
      (a, b) =>
        calculateSimilarity(article.tags || [], b.tags || []) -
        calculateSimilarity(article.tags || [], a.tags || [])
    )
    .slice(0, 3);

  const recommended = getRecommendedNews(article.id);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <Breadcrumb />

      <img
        src={article.imageUrl}
        alt={article.title}
        className="w-full h-64 object-cover rounded shadow-sm"
      />

      <h1 className="text-3xl font-bold mt-4">{article.title}</h1>

      <p className="text-sm text-gray-500 mt-2">
        By {article.author} • {article.createdAt} •{" "}
        {calculateReadingTime(article.content)}
      </p>

      <div className="mt-6 text-gray-700 leading-7 border-b pb-10">
        {article.content}
      </div>

      {/* Added RecommendedNews Component here */}
      <RecommendedNews articleId={article.id} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Related Articles Section */}
        <div>
          <h3 className="mt-10 font-semibold text-lg">Related Articles</h3>
          {related.map((r) => (
            <div
              key={r.id}
              className="border p-3 mt-3 rounded hover:bg-gray-50 cursor-pointer"
            >
              {r.title}
            </div>
          ))}
        </div>

        {/* Recommended For You Section */}
        <div>
          <h3 className="mt-10 font-semibold text-lg">{t("recommended")}</h3>
          {recommended.map((r) => (
            <div
              key={r.id}
              className="border p-3 mt-3 rounded hover:bg-gray-50 cursor-pointer"
            >
              {r.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;