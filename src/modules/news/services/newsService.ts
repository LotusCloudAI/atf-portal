import { collection, getDocs, addDoc, doc, getDoc, updateDoc, query, orderBy } from "firebase/firestore";
import { db } from "../../../firebase";
import { News } from "../types/news";

const newsRef = collection(db, "news");

export const getAllNews = async (): Promise<News[]> => {
  const q = query(newsRef, orderBy("createdAt", "desc"));
  const snap = await getDocs(q);
  return snap.docs.map(doc => ({ id: doc.id, ...doc.data() } as News));
};

export const getNewsById = async (id: string): Promise<News | null> => {
  const ref = doc(db, "news", id);
  const snap = await getDoc(ref);
  return snap.exists() ? ({ id: snap.id, ...snap.data() } as News) : null;
};

export const createNews = async (news: News) => {
  await addDoc(newsRef, {
    ...news,
    createdAt: new Date(),
    updatedAt: new Date()
  });
};

export const updateNews = async (id: string, news: Partial<News>) => {
  await updateDoc(doc(db, "news", id), {
    ...news,
    updatedAt: new Date()
  });
};