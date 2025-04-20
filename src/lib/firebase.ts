// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCE3gdv5m4NLabSG8dVpkUrhk3GD3fIh3Y",
  authDomain: "show-me-db80f.firebaseapp.com",
  projectId: "show-me-db80f",
  storageBucket: "show-me-db80f.firebasestorage.app",
  messagingSenderId: "895588752232",
  appId: "1:895588752232:web:14d139f2b89799d4e054dd",
  measurementId: "G-SB0X35CZC1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
