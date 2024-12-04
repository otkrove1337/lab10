// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYHRtnsTD9DjSvIqPE8OufzQPRzNVRc0M",
  authDomain: "lab10-172fb.firebaseapp.com",
  projectId: "lab10-172fb",
  storageBucket: "lab10-172fb.firebasestorage.app",
  messagingSenderId: "892301767116",
  appId: "1:892301767116:web:71a166038b4ad1f2176d69",
  measurementId: "G-L3HWM3ZZJ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };