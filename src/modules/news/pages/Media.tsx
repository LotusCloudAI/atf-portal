import { useEffect, useState } from "react";
import { getPublishedMedia } from "../services/mediaService";

export default function Media() {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    getPublishedMedia().then(setItems);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Media Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {items.map(item => (
          <div key={item.id} className="border rounded p-2">
            <img src={item.thumbnailUrl} alt={item.title} className="w-full h-48 object-cover" />
            <h2 className="font-semibold mt-2">{item.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
