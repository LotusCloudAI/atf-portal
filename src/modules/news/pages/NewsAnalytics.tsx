import { mockNews } from "../data/mockNews";

const NewsAnalytics = () => {

  const total = mockNews.length;
  const categories = [...new Set(mockNews.map(n => n.category))];

  const views = JSON.parse(localStorage.getItem("views") || "{}");

  const mostViewed = [...mockNews].sort(
    (a, b) => (views[b.id] || 0) - (views[a.id] || 0)
  )[0];

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm border">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">News Analytics</h2>
      
      <div className="space-y-6">
        {/* General Stats Card */}
        <section className="bg-blue-50 p-4 rounded-md border border-blue-100">
          <p className="text-blue-800 font-medium">
            Total Articles: <span className="text-xl">{total}</span>
          </p>
          
          {/* Trending Highlight */}
          <div className="mt-4 pt-4 border-t border-blue-200">
            <h4 className="text-xs uppercase tracking-wider text-blue-600 font-bold">Trending Now</h4>
            <p className="mt-1 text-gray-900 font-semibold">
              Most Viewed Article: 
              <span className="ml-2 text-blue-700 italic">
                {mostViewed?.title || "No data yet"}
              </span>
            </p>
            <p className="text-xs text-blue-500 mt-1">
               ({views[mostViewed?.id] || 0} views)
            </p>
          </div>
        </section>

        {/* Category List */}
        <section>
          <h3 className="font-semibold text-gray-700 border-b pb-2 mb-3">
            Content Breakdown by Category
          </h3>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {categories.map(cat => (
              <li 
                key={cat} 
                className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-600 text-center"
              >
                {cat}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default NewsAnalytics;