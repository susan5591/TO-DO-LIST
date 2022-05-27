import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAEstZg5rY1P3PPjlikkKj9MWVVdSBHOGE",
  authDomain: "wen-project.firebaseapp.com",
  projectId: "wen-project",
  storageBucket: "wen-project.appspot.com",
  messagingSenderId: "15651221020",
  appId: "1:15651221020:web:bfcae809c71ed183aff9d9",
  measurementId: "G-6H409XGFXR",
  storageBucket: 'gs://wen-project.appspot.com'
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

export const storage = getStorage(app)
