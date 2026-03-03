import { collection, getDocs, addDoc, updateDoc, doc, Timestamp } from "firebase/firestore";
import { db } from "./firebase";

const tvCollection = collection(db, "tv_videos");

export const getTVVideos = async () => {
  const snapshot = await getDocs(tvCollection);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};

export const addTVVideo = async (data: any) => {
  return await addDoc(tvCollection, {
    ...data,
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now()
  });
};

export const updateTVVideo = async (id: string, data: any) => {
  const ref = doc(db, "tv_videos", id);
  return await updateDoc(ref, {
    ...data,
    updatedAt: Timestamp.now()
  });
};
