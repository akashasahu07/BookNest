// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBm0vpzz6hTzIOiauhvZ6_yPzYJDBsBCls",
  authDomain: "booknest-7a580.firebaseapp.com",
  projectId: "booknest-7a580",
  storageBucket: "booknest-7a580.firebasestorage.app",
  messagingSenderId: "352245128102",
  appId: "1:352245128102:web:a12ac008e57fa1065d8d67",
  measurementId: "G-F97PK29BXD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export default app;