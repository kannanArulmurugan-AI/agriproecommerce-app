// Import the necessary Firebase modules
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD75ouv5yerzlfay-bNkqg_iGvbiNmA8x4",
  authDomain: "agriproecommerce-app.firebaseapp.com",
  projectId: "agriproecommerce-app",
  storageBucket: "agriproecommerce-app.appspot.com",
  messagingSenderId: "292507794353",
  appId: "1:292507794353:web:393514321803a20e699b90",
  measurementId: "G-ZMWY45M2ME"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };