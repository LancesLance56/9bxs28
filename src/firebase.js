// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get, child } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5jrXzGB2YW-1-AXIWySuF2sR5c0S3W6M",
  authDomain: "my9bxs28.firebaseapp.com",
  databaseURL: "https://my9bxs28-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "my9bxs28",
  storageBucket: "my9bxs28.appspot.com",
  messagingSenderId: "547971912918",
  appId: "1:547971912918:web:593fd2197b50463c026577",
  measurementId: "G-MBY0JM7VV1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, get, child };
