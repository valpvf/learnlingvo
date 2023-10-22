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

console.log("auth.uid", auth.uid);

// Project
// GET https://firebase.googleapis.com/v1beta1/projects/learnlangnguage?access_token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjAzZDA3YmJjM2Q3NWM2OTQyNzUxMGY2MTc0ZWIyZjE2NTQ3ZDRhN2QiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vbGVhcm5sYW5nbmd1YWdlIiwiYXVkIjoibGVhcm5sYW5nbmd1YWdlIiwiYXV0aF90aW1lIjoxNjk4MDA5MTkzLCJ1c2VyX2lkIjoidXZQWDB3NW1rU1pvMGxMMkNpR3BXSzBiNE8xMiIsInN1YiI6InV2UFgwdzVta1NabzBsTDJDaUdwV0swYjRPMTIiLCJpYXQiOjE2OTgwMDkxOTMsImV4cCI6MTY5ODAxMjc5MywiZW1haWwiOiJ2YWwucHZmQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ2YWwucHZmQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.UjcJ6mfer3xmn8Uo16WROzipxXl2hP0z9cyyBjvg_0lqd98TldBp61C6H6_clipVey50NgVYpo4eO9oxXNAdliQUBIfdr9I8mcQlivowg8l38BW_b3UteMbKd0pHVzv_pByn_E5VNoUYkPDWPAHmYVGy3h2nECP35_1rKyONLeH6Vc7TBim9xNe3i3ZU9-rdbySvdAHKO9L8rttbCvZobyQMDXimnyz7qd_ftJwJZTacXUJeoLbo1Q9te_mujOJxbRLXETZH161_kfOKzZ3yPhL5xgHFy0K4Pz_R9iWczy7BUsCxW6G7tDOPGBEsCIM405XdrgaA1wJrkmwLnr260Q&key=[YOUR_API_KEY] HTTP/1.1

// Authorization: Bearer [YOUR_ACCESS_TOKEN]
// Accept: application/json
