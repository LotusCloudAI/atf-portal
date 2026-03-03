import { useEffect, useState } from "react";
import { getTVVideos } from "../services/tvService";

const TV = () => {
  const [videos, setVideos] = useState<any[]>([]);

  useEffect(() => {
    getTVVideos().then(data =>
      setVideos(data.filter(v => v.published))
    );
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">ATF TV</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {videos.map(video => (
          <div key={video.id} className="border rounded p-4">
            <img
              src={video.thumbnailUrl}
              alt={video.title}
              className="mb-3 rounded"
            />
            <h2 className="font-semibold">{video.title}</h2>
            <p className="text-sm text-gray-600 mb-2">
              {video.description}
            </p>
            {video.videoType === "youtube" && (
              <a
                href={video.youtubeUrl}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 underline"
              >
                Watch on YouTube
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TV;