import { useEffect, useState } from "react";
import { getAllNews } from "../services/newsService";
import { News } from "../types/News";
import NewsGrid from "../components/NewsGrid";
import Pagination from "../../../components/UI/Pagination";
import SkeletonCard from "../../../components/UI/SkeletonCard";
import { useParams } from "react-router-dom";

const NewsList = () => {
  const [articles, setArticles] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedStates, setSelectedStates] = useState<string[]>([]);
  const [selectedTag, setSelectedTag] = useState("");
  const itemsPerPage = 6;
  const { stateCode } = useParams();

  // Filter Logic
  const filteredArticles = articles
    .filter((a) => (selectedCategory ? a.category === selectedCategory : true))
    .filter((a) =>
      a.title.toLowerCase().includes(search.toLowerCase()) ||
      a.content.toLowerCase().includes(search.toLowerCase())
    )
    .filter((a) => (selectedTag ? a.tags?.includes(selectedTag) : true))
    // Prioritize URL params (stateCode), then fallback to multi-select
    .filter((a) => (stateCode ? a.state === stateCode : true))
    .filter((a) =>
      selectedStates.length ? selectedStates.includes(a.state || "") : true
    );

  const totalPages = Math.ceil(filteredArticles.length / itemsPerPage);

  const paginatedArticles = filteredArticles.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await getAllNews();
        setArticles(data);
      } catch {
        setError("Failed to load news");
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  if (loading)
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {[...Array(6)].map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );

  if (error) return <p className="p-6 text-red-500">{error}</p>;

  return (
    <div className="p-6">
      {/* Advanced Filters Section */}
      <div className="border p-4 mb-6 rounded bg-gray-50">
        <h3 className="font-semibold mb-3">Advanced Filters</h3>
        <div className="flex flex-wrap gap-3">
          {/* Category Filter */}
          <select
            className="border p-2 rounded bg-white"
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
              setCurrentPage(1);
            }}
          >
            <option value="">All Categories</option>
            <option value="Governance">Governance</option>
            <option value="Youth">Youth</option>
          </select>

          {/* Tag Filter */}
          <select
            className="border p-2 rounded bg-white"
            value={selectedTag}
            onChange={(e) => {
              setSelectedTag(e.target.value);
              setCurrentPage(1);
            }}
          >
            <option value="">All Tags</option>
            <option value="ATF">ATF</option>
            <option value="Leadership">Leadership</option>
          </select>

          {/* Multi-State Filter */}
          <div className="flex flex-col">
            <label className="text-xs text-gray-500 mb-1">States (Hold Ctrl/Cmd to multi-select)</label>
            <select
              multiple
              className="border p-2 rounded bg-white min-w-[150px]"
              value={selectedStates}
              onChange={(e) => {
                const options = Array.from(e.target.selectedOptions, (o) => o.value);
                setSelectedStates(options);
                setCurrentPage(1);
              }}
            >
              <option value="TX">Texas</option>
              <option value="CA">California</option>
              <option value="NY">New York</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results Section */}
      {filteredArticles.length === 0 ? (
        <p className="py-10 text-center text-gray-500">No news matches your filters.</p>
      ) : (
        <>
          <NewsGrid articles={paginatedArticles} />
          {totalPages > 1 && (
            <div className="mt-8">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default NewsList;