import { mockNews } from "../data/mockNews";

const NewsAnalytics = () => {
  const total = mockNews.length;

  const categories = [...new Set(mockNews.map(n => n.category))];

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">News Analytics</h2>
      <p>Total Articles: {total}</p>

      <h3 className="mt-4 font-semibold">Categories:</h3>
      <ul>
        {categories.map(cat => (
          <li key={cat}>{cat}</li>
        ))}
      </ul>
    </div>
  );
};

export default NewsAnalytics;