import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDogt816RbOMW9g7bD0fkqst1iO0icZHSs",
  authDomain: "educkbank.firebaseapp.com",
  projectId: "educkbank",
  storageBucket: "educkbank.appspot.com",
  messagingSenderId: "501792573299",
  appId: "1:501792573299:web:dfbda1e847db4e505d2706",
  measurementId: "G-GQR3VC17D2",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
