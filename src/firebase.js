import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyADy5suDNUyXd8hny_7vO79u8tKm7CEVHI",
  authDomain: "chatapp-e36cc.firebaseapp.com",
  projectId: "chatapp-e36cc",
  storageBucket: "chatapp-e36cc.appspot.com",
  messagingSenderId: "1043189083105",
  appId: "1:1043189083105:web:9b8a01ca25d0a36c51c0a0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
