// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBawdXxYNs-zhaHOpsQn_4HqMO9gN1LNz0",
  authDomain: "abi-dynamic.firebaseapp.com",
  projectId: "abi-dynamic",
  storageBucket: "abi-dynamic.appspot.com",
  messagingSenderId: "308741040770",
  appId: "1:308741040770:web:22ae61e5a7fb30a2a3629b",
  measurementId: "G-1QK2BBFMCF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

const googleProvider = new GoogleAuthProvider();
const auth = getAuth();

export { storage, googleProvider, auth };

