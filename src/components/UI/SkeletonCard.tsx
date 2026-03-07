const SkeletonCard = () => {
  return (
    <div className="border rounded shadow p-4 animate-pulse">
      <div className="h-40 bg-gray-300 rounded mb-4"></div>
      <div className="h-4 bg-gray-300 mb-2"></div>
      <div className="h-4 bg-gray-300 w-3/4"></div>
    </div>
  );
};

export default SkeletonCard;