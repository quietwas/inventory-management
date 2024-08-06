// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6ZxCLkPv0wp-HtBzutGLdkDyknWHyKXg",
  authDomain: "inventory-management-ae8a4.firebaseapp.com",
  projectId: "inventory-management-ae8a4",
  storageBucket: "inventory-management-ae8a4.appspot.com",
  messagingSenderId: "54616518041",
  appId: "1:54616518041:web:acc304e00b7315c15e3708",
  measurementId: "G-FLDE4G7BL7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {firestore, auth, provider};