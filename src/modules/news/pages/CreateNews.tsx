import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../services/firebase";
import { slugify } from "../../../utils/slugify";
import { useEffect } from "react";
import { getAuthors } from "../services/authorService";


const CreateNews = () => {
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [authors, setAuthors] = useState<any[]>([]);
  const [selectedAuthor, setSelectedAuthor] = useState("");
  const [stateCode, setStateCode] = useState("");

    useEffect(() => {
        getAuthors().then((data: any) => setAuthors(data));
        }, []);

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const newArticle = {
    title,
    summary,
    content,
    slug: slugify(title),
    category: "General",
    author: "selectedAuthor",
    createdAt: new Date().toISOString(),
    tags: [],
    status: "draft",
    isPremium: false,
  };

  try {
    await addDoc(collection(db, "news"), newArticle);
    alert("News Created Successfully");
  } catch (error) {
    console.error(error);
    alert("Error creating news");
  }
};


  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Create News</h2>

      <form onSubmit={handleSubmit}>
        <input
          className="border p-2 w-full mb-3"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="border p-2 w-full mb-3"
          placeholder="Tags (comma separated)"
          onChange={(e) => setTags(e.target.value)}
        />

        <textarea
          className="border p-2 w-full mb-3"
          placeholder="Summary"
          onChange={(e) => setSummary(e.target.value)}
        />

        <textarea
          className="border p-2 w-full mb-3"
          placeholder="Content"
          rows={6}
          onChange={(e) => setContent(e.target.value)}
        />
        <select
            className="border p-2 w-full mb-3"
            onChange={(e) => setStateCode(e.target.value)}
        >
            <option value="">Select State</option>
            <option value="TX">Texas</option>
            <option value="CA">California</option>
            <option value="NY">New York</option>
        </select>

        <button className="bg-green-600 text-white px-4 py-2 rounded">
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateNews;
