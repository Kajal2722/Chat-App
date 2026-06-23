import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyC3_5Y37THjeEKvGzAQ-Lgo_23EKsVJaoE",
  authDomain: "chat-app-a05de.firebaseapp.com",
  projectId: "chat-app-a05de",
  storageBucket: "chat-app-a05de.firebasestorage.app",
  messagingSenderId: "46158726543",
  appId: "1:46158726543:web:0c71576c0fc7df2fd0f7fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
