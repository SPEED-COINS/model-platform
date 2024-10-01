// firebase.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2V17qNrbAQAJQw7UklO_5UPhqhLSJ_6A",
  authDomain: "model-platform-1ed01.firebaseapp.com",
  projectId: "model-platform-1ed01",
  storageBucket: "model-platform-1ed01.appspot.com",
  messagingSenderId: "927770182449",
  appId: "1:927770182449:web:5d8bd43fdb3cf0a4f52610",
  measurementId: "G-MTQTJPX3R6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
