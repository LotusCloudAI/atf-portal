import React from "react"; // Added React import for memo
import { News } from "../types/News";
import { Link } from "react-router-dom";
import Badge from "../../../components/UI/Badge";

interface Props {
  article: News;
}

const NewsCard = ({ article }: Props) => {
  return (
    <div className="border rounded shadow hover:shadow-lg transition overflow-hidden bg-white">
      <img
        src={article.imageUrl}
        alt={article.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex items-center">
          {/* Category Badge */}
          <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
            {article.category}
          </span>

          {/* State Badge (Conditional) */}
          {article.state && (
            <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded ml-2">
              {article.state}
            </span>
          )}
        </div>

        <h3 className="font-semibold text-lg mt-2 line-clamp-2">
          {article.title}
        </h3>
        <p className="text-sm text-gray-600 mt-2 line-clamp-3">
          {article.summary}
        </p>
        
        <Link
          to={`/news/${article.slug}`}
          className="inline-block mt-3 text-blue-600 font-medium hover:underline"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

// Wrap component with React.memo to optimize performance
export default React.memo(NewsCard);