import { useParams } from "react-router-dom";
import { mockNews } from "../data/mockNews";

const ChapterNewsDashboard = () => {
  const { stateCode } = useParams();

  const stateArticles = mockNews.filter(
    n => n.state === stateCode
  );
  const sorted = stateArticles.sort(
    (a, b) => (b.views || 0) - (a.views || 0)
  );


  return (
    <div className="p-6">
      <h2 className="text-xl font-bold">
        {stateCode} Chapter News
      </h2>

      {stateArticles.map(article => (
        <div key={article.id} className="border p-3 mt-3 rounded">
          {article.title}
        </div>
      ))}
    </div>
  );
};

export default ChapterNewsDashboard;