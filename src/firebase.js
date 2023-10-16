import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const API_KEY = import.meta.env.VITE_FB_API_KEY;

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "learnlangnguage.firebaseapp.com",
  projectId: "learnlangnguage",
  storageBucket: "learnlangnguage.appspot.com",
  messagingSenderId: "699143296274",
  appId: "1:699143296274:web:a8c67d2ac79c3853ec4fcb",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
