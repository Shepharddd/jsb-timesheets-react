// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4_Y_3zsP1wJPDPSrv2qxVAEGZl_YtDyM",
  authDomain: "jsb-backend.firebaseapp.com",
  projectId: "jsb-backend",
  storageBucket: "jsb-backend.firebasestorage.app",
  messagingSenderId: "522834451424",
  appId: "1:522834451424:web:1771fd13aad4d99c96e985",
  measurementId: "G-XNQSZMDCP3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);