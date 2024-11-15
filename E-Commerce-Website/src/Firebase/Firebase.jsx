// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getApp } from "firebase/app";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCx3CwyoqPNiPTJzNicaVTDIgr9QldEfOw",
  authDomain: "shoppingwithlove-47972.firebaseapp.com",
  databaseURL:
    "https://shoppingwithlove-47972-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "shoppingwithlove-47972",
  storageBucket: "shoppingwithlove-47972.appspot.com",
  messagingSenderId: "179693221093",
  appId: "1:179693221093:web:2fc07c7212db7ec70e900c",
  measurementId: "G-6K303GWSDN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firebaseApp = getApp();
const storage = getStorage(firebaseApp,"Products");
export const db = getFirestore(app);
export const auth = getAuth(app);
