// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPs6dndTV640YLUxagHwA3-zFgC9zeTkg",
  authDomain: "netflix-clone-be51f.firebaseapp.com",
  projectId: "netflix-clone-be51f",
  storageBucket: "netflix-clone-be51f.appspot.com",
  messagingSenderId: "594006440372",
  appId: "1:594006440372:web:e74785d033702f78601ae1",
  measurementId: "G-V6HTE4MG5H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);