// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7yNjlZFaCTmNmGdNRJpIaWePatlJfDsI",
  authDomain: "netflix-gpt-791af.firebaseapp.com",
  projectId: "netflix-gpt-791af",
  storageBucket: "netflix-gpt-791af.firebasestorage.app",
  messagingSenderId: "830283119846",
  appId: "1:830283119846:web:a9f08d7ae4fbacf27e0f27",
  measurementId: "G-RELMLHNG85"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

 export const auth = getAuth();