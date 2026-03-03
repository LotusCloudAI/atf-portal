import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebase";

export const getPublishedMedia = async () => {
  const q = query(
    collection(db, "media"),
    where("status", "==", "published")
  );
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};
