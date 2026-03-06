import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../services/firebase";

const StatsDashboard = () => {
  const [memberCount, setMemberCount] = useState(0);
  const [chapterCount, setChapterCount] = useState(0);

  useEffect(() => {
    const fetchCounts = async () => {
      const members = await getDocs(collection(db, "members"));
      const chapters = await getDocs(collection(db, "chapters"));

      setMemberCount(members.size);
      setChapterCount(chapters.size);
    };

    fetchCounts();
  }, []);

  return (
    <div className="flex gap-4 p-6">
      <div className="bg-blue-100 p-4 rounded shadow">
        <h3 className="text-lg font-bold">Total Members: {memberCount}</h3>
      </div>
      <div className="bg-green-100 p-4 rounded shadow">
        <h3 className="text-lg font-bold">Active Chapters: {chapterCount}</h3>
      </div>
    </div>
  );
};

export default StatsDashboard;