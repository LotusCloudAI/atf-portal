import { mockNews } from "../data/mockNews";

const AuthorDashboard = () => {
  const currentAuthor = "Content Writer"; // mock login

  const articles = mockNews.filter(n => n.author === currentAuthor);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold">My Articles</h2>

      {articles.map(article => (
        <div key={article.id} className="border p-3 mt-3 rounded">
          {article.title} - {article.status}
        </div>
      ))}
    </div>
  );
};

export default AuthorDashboard;
