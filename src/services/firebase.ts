import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBussg48x4NAv917SXMPr9qtVSEZ3k13Y",
  authDomain: "lotuscloud-atf.firebaseapp.com",
  projectId: "lotuscloud-atf",
  storageBucket: "lotuscloud-atf.firebasestorage.app",
  messagingSenderId: "282672152402",
  appId: "1:282672152402:web:d6a2fb612d2f3c31e4048b"
};

// INIT
const app = initializeApp(firebaseConfig);

// EXPORTS FOR APP USAGE
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
