import { useParams } from "react-router-dom";
import { mockAuthors } from "../data/mockAuthors";
import { mockNews } from "../data/mockNews";

const AuthorProfile = () => {
  const { id } = useParams();
  const author = mockAuthors.find(a => a.id === id);

  if (!author) return <p>Author not found</p>;

  const articles = mockNews.filter(n => n.author === author.name);

  return (
    <div className="p-6">
      <img src={author.avatarUrl} className="w-24 h-24 rounded-full" />
      <h2 className="text-2xl font-bold mt-4">{author.name}</h2>
      <p className="text-gray-600 mt-2">{author.bio}</p>

      <h3 className="mt-6 font-semibold">Articles</h3>
      {articles.map(a => (
        <div key={a.id} className="border p-3 mt-2 rounded">
          {a.title}
        </div>
      ))}
    </div>
  );
};

export default AuthorProfile;
