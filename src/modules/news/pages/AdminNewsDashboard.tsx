import { mockNews } from "../data/mockNews";
import { Link } from "react-router-dom";
import RoleGuard from "../../../components/UI/RoleGuard";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../../../services/firebase";

const handleDelete = async (id: string) => {
  try {
    const ref = doc(db, "news", id);
    await updateDoc(ref, { isDeleted: true });
    alert("Soft Deleted");
  } catch (error) {
    console.error(error);
  }
};

const handlePublish = async (id: string) => {
  try {
    const ref = doc(db, "news", id);
    await updateDoc(ref, { status: "published" });
    alert("Published");
  } catch (error) {
    console.error(error);
  }
};

const AdminNewsDashboard = () => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Admin News Dashboard</h2>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Title</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {mockNews.map((news) => (
            <tr key={news.id}>
              <td className="p-2 border">{news.title}</td>
              <td className="p-2 border">{news.status}</td>
              <td className="p-2 border">{news.editorStatus || "Not Reviewed"}</td>

              <td className="p-2 border">
                <div className="flex items-center">
                  <Link
                    to={`/news/${news.slug}`}
                    className="text-blue-600 hover:underline"
                  >
                    View
                  </Link>

                  {/* Mock Action Buttons */}
                  <button
                    className="text-blue-600 ml-3 hover:text-blue-800"
                    onClick={() => alert("Approved (Mock)")}
                  >
                    Approve
                  </button>

                  <button
                    className="text-gray-600 ml-3 hover:text-gray-800"
                    onClick={() => alert("Rejected (Mock)")}
                  >
                    Reject
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminNewsDashboard;