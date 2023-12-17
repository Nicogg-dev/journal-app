// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjhagTu-e35nQ_r25hYij-5CQ80OC5rMw",
  authDomain: "react-udemy-b7654.firebaseapp.com",
  projectId: "react-udemy-b7654",
  storageBucket: "react-udemy-b7654.appspot.com",
  messagingSenderId: "555775383167",
  appId: "1:555775383167:web:caf0d2eb46c4dd47a6514a"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp); //autenticacion
export const FirebaseDB = getFirestore(FirebaseApp); //base de datos

