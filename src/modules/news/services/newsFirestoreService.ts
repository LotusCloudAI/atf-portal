import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../services/firebase";
import { News } from "../types/News";

export const fetchNewsFromFirestore = async (): Promise<News[]> => {
  const snapshot = await getDocs(collection(db, "news"));

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  })) .filter((n: any) => !n.isDeleted) as News[];
};
