// FirebaseApp
// firebaseApp.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage"; 

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyCYmqjDfyDLW_lnipSyfPM3pWkwYzeiMSw",
    authDomain: "lumora-scents.firebaseapp.com",
    projectId: "lumora-scents",
    storageBucket: "lumora-scents.firebasestorage.app",
    messagingSenderId: "481131716151",
    appId: "1:481131716151:web:03348c0b2545125edc29b2",
    measurementId: "G-LHR9PW23TC"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);