// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyEZar5sZ35jZN13EkXj8gApL7NL18Kfo",
  authDomain: "emailpasswordauth-ef8ce.firebaseapp.com",
  projectId: "emailpasswordauth-ef8ce",
  storageBucket: "emailpasswordauth-ef8ce.firebasestorage.app",
  messagingSenderId: "937606684742",
  appId: "1:937606684742:web:a64b2111c1b525121bea47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 

const authentication = getAuth(app);
export default authentication;