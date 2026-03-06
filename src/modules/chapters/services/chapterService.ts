import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../services/firebase";

export const getChapters = async () => {
 const snapshot = await getDocs(collection(db, "chapters"));
 return snapshot.docs.map(doc => ({
   id: doc.id,
   ...doc.data()
 }));
};
