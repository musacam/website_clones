// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCI9-dB39OE8NVwEI8WHaeR5ULkO1WGKU0",
  authDomain: "uber-next-clone-d1925.firebaseapp.com",
  projectId: "uber-next-clone-d1925",
  storageBucket: "uber-next-clone-d1925.appspot.com",
  messagingSenderId: "416362163381",
  appId: "1:416362163381:web:22024a7a0574bbc6cee2fc",
  measurementId: "G-XJ83BJV0LP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
const auth = getAuth()

export {app, provider, auth}