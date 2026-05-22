// FIREBASE IMPORTS

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  setDoc,
  doc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


// FIREBASE CONFIG

const firebaseConfig = {
  apiKey: "AIzaSyBxa8xtASsSge47E9083CmXL-zBg_0haGU",
  authDomain: "cyron-website.firebaseapp.com",
  projectId: "cyron-website",
  storageBucket: "cyron-website.firebasestorage.app",
  messagingSenderId: "620125286265",
  appId: "1:620125286265:web:58a24828ce7837b5b889a8"
};


// INITIALIZE FIREBASE

const app = initializeApp(firebaseConfig);


// EXPORTS

export const auth = getAuth(app);
export const db = getFirestore(app);

export {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  onAuthStateChanged,
  collection,
  addDoc,
  getDocs,
  setDoc,
  doc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  serverTimestamp
};