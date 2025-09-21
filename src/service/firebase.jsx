
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyALc-hE6jLOunncjUGiKH7VRAWS6sKBhWE",
  authDomain: "boca-shop-coderflex.firebaseapp.com",
  projectId: "boca-shop-coderflex",
  storageBucket: "boca-shop-coderflex.firebasestorage.app",
  messagingSenderId: "91202860273",
  appId: "1:91202860273:web:01a9c898390f3880dd2550"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)