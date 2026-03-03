import { useEffect, useState } from "react";
import { getTVVideos, addTVVideo } from "../../services/tvService";

const AdminTV = () => {
  const [videos, setVideos] = useState<any[]>([]);
  const [form, setForm] = useState<any>({
    title: "",
    description: "",
    videoType: "youtube",
    youtubeUrl: "",
    thumbnailUrl: "",
    published: false
  });

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    setVideos(await getTVVideos());
  };

  const submit = async () => {
    await addTVVideo(form);
    setForm({ ...form, title: "", description: "", youtubeUrl: "", thumbnailUrl: "" }); // Clear fields
    load();
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin – ATF TV</h1>

      <div className="border p-4 mb-6">
        <input className="border p-2 m-2" placeholder="Title" onChange={e => setForm({...form, title: e.target.value})} />
        <input className="border p-2 m-2" placeholder="Description" onChange={e => setForm({...form, description: e.target.value})} />
        <input className="border p-2 m-2" placeholder="YouTube URL" onChange={e => setForm({...form, youtubeUrl: e.target.value})} />
        <input className="border p-2 m-2" placeholder="Thumbnail URL" onChange={e => setForm({...form, thumbnailUrl: e.target.value})} />

        <label className="m-2">
          <input type="checkbox" onChange={e => setForm({...form, published: e.target.checked})} />
          Published
        </label>

        <button onClick={submit} className="bg-blue-600 text-white px-4 py-2 m-2">
          Add Video
        </button>
      </div>

      <ul>
        {videos.map(v => (
          <li key={v.id} className="border-b p-2">{v.title} - {v.published ? "Live" : "Draft"}</li>
        ))}
      </ul>
    </div>
  );
};

export default AdminTV;
