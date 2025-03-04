import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAZifhEcyyCQNzQBDyGfF3-kUUF1VMdplA",
  authDomain: "social-media-app-e97e5.firebaseapp.com",
  projectId: "social-media-app-e97e5",
  storageBucket: "social-media-app-e97e5.firebasestorage.app",
  messagingSenderId: "42794659504",
  appId: "1:42794659504:web:4dcbf43d300f0c8de09575",
  measurementId: "G-9H72X5KKX7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export {app, auth, firestore, storage};
