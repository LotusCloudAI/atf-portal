import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDaADXEFkyRYLcz_0KVen0ejFMOFO4wa94",
  authDomain: "atf-us.firebaseapp.com",
  projectId: "atf-us",
  storageBucket: "atf-us.firebasestorage.app",
  messagingSenderId: "843622855344",
  appId: "1:843622855344:web:93b38310ceede49e268175",
  measurementId: "G-GZXZS3V1CS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Services
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

// Optional: Initialize Analytics safely (only in browser)
isSupported().then((yes) => {
  if (yes) {
    getAnalytics(app);
  }
});