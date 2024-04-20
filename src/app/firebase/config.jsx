// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDogt816RbOMW9g7bD0fkqst1iO0icZHSs",
  authDomain: "educkbank.firebaseapp.com",
  projectId: "educkbank",
  storageBucket: "educkbank.appspot.com",
  messagingSenderId: "501792573299",
  appId: "1:501792573299:web:dfbda1e847db4e505d2706",
  measurementId: "G-GQR3VC17D2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);
