// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration, replace it with your project keys
const firebaseConfig = {
  apiKey: "AIzaSyDSmrZMQs-QKHKjSDqPT0ASVdzymzOcXtk",
  authDomain: "bakeli-tontine-bba30.firebaseapp.com",
  projectId: "bakeli-tontine-bba30",
  storageBucket: "bakeli-tontine-bba30.appspot.com",
  messagingSenderId: "990181220419",
  appId: "1:990181220419:web:b76fe089c995bf704f34f6",
  measurementId: "G-ELWDSB5ZPC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);