// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";
import {
  getDownloadURL,
  getStorage,
  ref,
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-storage.js";
// import { renderHome } from "./main.js";
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
export var database = getDatabase();

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
    handleUserLoggedIn(user);
    // ...
  } else {
    // User is signed out
    // ...
  }
});

export function handleUserLoggedIn(user) {
  const storage = getStorage(app);
  getDownloadURL(ref(storage, "users/" + user.uid + "/profile.jpg"))
    .then((url) => {
      $("nav .profile-image").attr("src", url);
    })
    .catch((err) => {
      console.log(err);
    });
  $(".user-display-name").text(user.displayName.split(" ")[0]);

  $(".logged-in").css("display", "block");

  $(".logged-out").css("display", "none");
}

export function handleUserLoggedOut() {
  $(".logged-in").css("display", "none");
  $(".logged-out").css("display", "block");
  renderHome();
}

export function notifyUser(message, type = "primary") {
  $(".notify").text(message);
  $(".notify").removeClass("d-none");
  setTimeout(() => {
    $(".notify").addClass("d-none");
  }, 3000);
}
