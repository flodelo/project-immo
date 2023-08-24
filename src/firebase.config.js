// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACXvbR8EOyKpgsvC4Gswhz0Yhwn8t1jiE",
  authDomain: "projet-immo-perso.firebaseapp.com",
  projectId: "projet-immo-perso",
  storageBucket: "projet-immo-perso.appspot.com",
  messagingSenderId: "891004540679",
  appId: "1:891004540679:web:79f508badbda09ae2c17a2"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();