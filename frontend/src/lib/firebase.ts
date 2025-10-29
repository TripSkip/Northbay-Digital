// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAM9EbpU7ViURd_roZqY7_-YRZFjCYZpJo",
  authDomain: "tripskip-63a61.firebaseapp.com",
  projectId: "tripskip-63a61",
  storageBucket: "tripskip-63a61.firebasestorage.app",
  messagingSenderId: "581240499967",
  appId: "1:581240499967:web:2d5ecdd88549507a8aa6ca",
  measurementId: "G-LTFHVLS2TY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()