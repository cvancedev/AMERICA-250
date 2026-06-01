import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBy_akVSgKQArSMr8PJJe7vKxw3iTuEnsA",
  authDomain: "america-250-f1bcb.firebaseapp.com",
  projectId: "america-250-f1bcb",
  storageBucket: "america-250-f1bcb.firebasestorage.app",
  messagingSenderId: "955212980560",
  appId: "1:955212980560:web:0d27b92b77dcc6ad63cc55",
  measurementId: "G-YDN1SDJXMD"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);