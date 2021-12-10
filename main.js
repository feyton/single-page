import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { auth } from "./base.js";
import { homeHtml, loginView, signupView } from "./templates.js";

$(document).ready(() => {
  // Routing
  var mainDiv = $("#main-container");

  $(".nav-link.home").click(() => {
    renderHome();
  });

  //   Handling Login Switch

  $(".nav-link.login").click(() => {
    renderLogin();
  });
  $(".nav-link.signup").click(() => {
    renderSignup();
  });

  function renderHome() {
    mainDiv.html("");
    mainDiv.html(homeHtml);
  }

  function renderLogin() {
    mainDiv.html("");
    mainDiv.html(loginView);
  }
  function renderSignup() {
    mainDiv.html("");
    mainDiv.html(signupView);
  }

  // Setting up a global event-listener for add DOM Elements

  // Login Form Submission

  mainDiv.on("click", "#form-submit", function (e) {
    e.preventDefault;
  });

  function processLoginForm() {
    const email = $("#user-email").val();
    const password = $("#user-password").val();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  // console.log(app);

  // Handle file chosen display

  $("main").on("change", "#user-picture", () => {
    // console.log("changed");
    var reader = new FileReader();
    reader.onload = function (e) {
      // console.log($("#user-picture")[0].files[0].name);
      $(".uploaded-image").attr("src", e.target.result);
    };
    reader.readAsDataURL($("#user-picture")[0].files[0]);
    $(".image-upload").css("display", "block");
  });
});

$("main").on("submit", "form", (e) => {
  e.preventDefault();
});
