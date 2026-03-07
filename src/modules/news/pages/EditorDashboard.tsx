import { mockNews } from "../data/mockNews";

const EditorDashboard = () => {
  const pending = mockNews.filter(n => n.status === "draft");

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold">Pending Review</h2>

      {pending.map(article => (
        <div key={article.id} className="border p-3 mt-3 rounded">
          {article.title}
        </div>
      ))}
    </div>
  );
};

export default EditorDashboard;
