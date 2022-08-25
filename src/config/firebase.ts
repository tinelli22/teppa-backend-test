// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBgiUTe3WO5OIihXZj_btq3pQJ7ilBKzWg",
  authDomain: "seletive-process.firebaseapp.com",
  projectId: "seletive-process",
  storageBucket: "seletive-process.appspot.com",
  messagingSenderId: "532285124072",
  appId: "1:532285124072:web:5470c47c768d46482f485d"
};

// Initialize Firebase
const firebaseApp = () => initializeApp(firebaseConfig);

export default firebaseApp