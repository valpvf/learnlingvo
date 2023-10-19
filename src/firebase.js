import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, onValue } from "firebase/database";

const API_KEY = import.meta.env.VITE_FB_API_KEY;

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "learnlangnguage.firebaseapp.com",
  projectId: "learnlangnguage",
  storageBucket: "learnlangnguage.appspot.com",
  messagingSenderId: "699143296274",
  appId: "1:699143296274:web:a8c67d2ac79c3853ec4fcb",
  databaseURL:
    "https://learnlangnguage-default-rtdb.europe-west1.firebasedatabase.app/",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase();
export const dataDB = ref(db, "/");
// onValue(dataDB, (snapshot) => {
//   const data = snapshot.val();
//   console.log("data", data);
// });
