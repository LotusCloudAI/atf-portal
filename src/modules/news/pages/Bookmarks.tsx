const Bookmarks = () => {
  const bookmarks = JSON.parse(localStorage.getItem("bookmarks") || "[]");

  if (!bookmarks.length) return <p className="p-6">No bookmarks yet</p>;

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Bookmarks</h2>
      {bookmarks.map((b: any) => (
        <div key={b.id} className="border p-3 mb-3 rounded">
          {b.title}
        </div>
      ))}
    </div>
  );
};

export default Bookmarks;
