// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYFYrPyIjf3d_g7qWA0G7Xadg39M27Gy8",
  authDomain: "netflixgpt-536fa.firebaseapp.com",
  projectId: "netflixgpt-536fa",
  storageBucket: "netflixgpt-536fa.firebasestorage.app",
  messagingSenderId: "1078799511556",
  appId: "1:1078799511556:web:f77a0daf55ab3034dd0551",
  measurementId: "G-P1ZFNT5FDE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();