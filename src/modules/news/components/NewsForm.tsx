import { useState } from "react";
import { createNews } from "../services/newsService";

export default function NewsForm() {
  const [form, setForm] = useState({
    title: "",
    summary: "",
    content: "",
    imageUrl: "",
    category: "",
    published: true
  });

  const submit = async () => {
    await createNews(form);
    alert("News created");
  };

  return (
    <div className="space-y-4">
      <input placeholder="Title" onChange={e => setForm({ ...form, title: e.target.value })} />
      <input placeholder="Summary" onChange={e => setForm({ ...form, summary: e.target.value })} />
      <textarea placeholder="Content" onChange={e => setForm({ ...form, content: e.target.value })} />
      <input placeholder="Image URL" onChange={e => setForm({ ...form, imageUrl: e.target.value })} />
      <input placeholder="Category" onChange={e => setForm({ ...form, category: e.target.value })} />
      <button onClick={submit}>Save</button>
    </div>
  );
}