// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get, child } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRTmxy3FS_uPF-ySwrPj39NQ_DlyBmDTo",
  authDomain: "ninebxs28.firebaseapp.com",
  databaseURL: "https://ninebxs28-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ninebxs28",
  storageBucket: "ninebxs28.appspot.com",
  messagingSenderId: "526756677140",
  appId: "1:526756677140:web:2f335bf1e3c2e323b20901",
  measurementId: "G-NF8Q4Q9Z9Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, get, child };
