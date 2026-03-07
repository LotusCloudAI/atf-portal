import { mockNews } from "../../news/data/mockNews";

const TrendingDashboard = () => {

  const views = JSON.parse(localStorage.getItem("views") || "{}");

  const sorted = [...mockNews].sort((a, b) => {
    return (views[b.id] || 0) - (views[a.id] || 0);
  });

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">
        Trending Articles
      </h1>

      {sorted.slice(0, 5).map(a => (
        <div key={a.id} className="border p-3 mb-3 rounded">
          {a.title} – {views[a.id] || 0} views
        </div>
      ))}
    </div>
  );
};

export default TrendingDashboard;
