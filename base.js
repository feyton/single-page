// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
//import { getDatabase } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7rdnDKUzQ6WJgceFUJ9U0KiixyW14a5A",
  authDomain: "blog-app-3fa1a.firebaseapp.com",
  databaseURL:
    "https://blog-app-3fa1a-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "blog-app-3fa1a",
  storageBucket: "blog-app-3fa1a.appspot.com",
  messagingSenderId: "1064759561001",
  appId: "1:1064759561001:web:05bd0707b239994244c538",
};

// Initialize Firebase
export var app = initializeApp(firebaseConfig);
export var auth = getAuth();

console.log("firebase loaded");

export function handleUserLoginError(code) {
  if (code == "auth/user-not-found") {
    alert("The user does not exist");
  } else if (code == "auth/wrong-password") {
    alert("Check your password and try again");
  } else if (code == "auth/invalid-email") {
    alert("Check your email address");
  }
}

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    $("logged-in").toggle();
    // ...
  } else {
    // User is signed out
    // ...
  }
});
