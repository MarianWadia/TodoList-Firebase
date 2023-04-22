// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOT5n9xB-x4-oVWsyUGDezjtme8bHd0HQ",
  authDomain: "todo-app-c5cdd.firebaseapp.com",
  projectId: "todo-app-c5cdd",
  storageBucket: "todo-app-c5cdd.appspot.com",
  messagingSenderId: "94150770220",
  appId: "1:94150770220:web:09360ac37cdf0dfd3c1b89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);