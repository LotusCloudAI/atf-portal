import { mockNews } from "../../news/data/mockNews";
import { useTranslation } from "react-i18next";
:
const { t } = useTranslation();
const ReadingHistory = () => {
  const history = JSON.parse(
    localStorage.getItem("readingHistory") || "[]"
  );

  const articles = mockNews.filter(n =>
    history.includes(n.id)
  );

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">
        {t("Your Reading History")}
      </h1>

      {articles.map(article => (
        <div key={article.id} className="border p-3 mb-3 rounded">
          {article.title}
        </div>
      ))}
    </div>
  );
};

export default ReadingHistory;
