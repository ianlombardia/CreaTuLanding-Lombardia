// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALc-hE6jLOunncjUGiKH7VRAWS6sKBhWE",
  authDomain: "boca-shop-coderflex.firebaseapp.com",
  projectId: "boca-shop-coderflex",
  storageBucket: "boca-shop-coderflex.firebasestorage.app",
  messagingSenderId: "91202860273",
  appId: "1:91202860273:web:01a9c898390f3880dd2550"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)