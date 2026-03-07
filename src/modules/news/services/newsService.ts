import { News } from "../types/News";
import { mockNews } from "../data/mockNews";
import { fetchNewsFromFirestore } from "./newsFirestoreService";

const USE_FIRESTORE = true;

export const getAllNews = async (): Promise<News[]> => {
  if (USE_FIRESTORE) {
    return await fetchNewsFromFirestore();
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockNews.filter(n => n.status === "published"));
    }, 500);
  });
};
