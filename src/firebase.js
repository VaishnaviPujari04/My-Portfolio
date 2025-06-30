// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAtcMqxwBJRWEMBD837GdwuVyePGPR64mI",
  authDomain: "contactportfolio-a6769.firebaseapp.com",
  projectId: "contactportfolio-a6769",
  storageBucket: "contactportfolio-a6769.firebasestorage.app",
  messagingSenderId: "656315113524",
  appId: "1:656315113524:web:937133ce223820f92bea61",
  measurementId: "G-2RDW54SSJP"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
