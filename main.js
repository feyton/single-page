import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes,
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-storage.js";
import {
  auth,
  handleUserLoggedIn,
  handleUserLoggedOut,
  handleUserLoginError,
} from "./base.js";
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
    handlePathnameHistory("", "Fabrice| Home");
    mainDiv.html("");
    mainDiv.html(homeHtml);
  }
  function handlePathnameHistory(path, title) {
    console.log(window.location.host);

    // Used to change the url
    // var nextUrl = "http://127.0.0.1:5500/" + path;

    // window.history.pushState("", title, nextUrl);
    // window.history.replaceState("", title, nextUrl);
    $("title").text(title);
  }

  function renderLogin() {
    var path = "login";
    var title = "Fabrice| Login";
    handlePathnameHistory(path, title);
    mainDiv.html("");
    mainDiv.html(loginView);
  }
  function renderSignup() {
    handlePathnameHistory("signup", "SignUp| Fabrice");
    mainDiv.html("");
    mainDiv.html(signupView);
  }

  // Setting up a global event-listener for add DOM Elements

  // Login Form Submission

  mainDiv.on("submit", "form", function (e) {
    e.preventDefault;
  });

  function processLoginForm() {
    const email = $("#user-email").val();
    const password = $("#user-password").val();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        handleUserLoggedIn(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        handleUserLoginError(errorCode);
      });
  }

  mainDiv.on("submit", "#login-form", () => {
    processLoginForm();
  });
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

// function processFormInputs(formId, fields) {
//   var data = $(formId).serializeArray();
//   // console.log(data);
//   var dataValue = [];
//   fields.forEach((field) => {
//     var fieldValue = Object.keys(data).forEach((key) => {
//       if (data[key].name == field) {
//         let val = data[key].value;
//         var valName = data[key].name;
//         // console.log(valName);
//         // var pair = {
//         //   name: valName,
//         //   value: val,
//         // };
//         // console.log(pair);
//         dataValue.push(val);
//       } else {
//         // console.log(data[key]);
//       }
//     });
//     // dataValue.push({
//     //   field: fieldValue,
//     // });
//   });
//   console.log(dataValue);
//   return dataValue;
// }

function getInputValue(id) {
  return $(id).val();
}

$("#main-container").on("submit", "#signup-form", () => {
  // let fields = ["name", "email", "password1", "password2", "profile-picture"];
  // let formId = "#signup-form";
  // var signup_info = processFormInputs(formId, fields);

  // console.log(signup_info);
  var name, email, password1, img, imgUrl, password2;
  // var data = Object.keys(signup_info);
  // name = data["name"].value;
  // email = data["email"].value;
  // password = data["password1"].value;

  name = getInputValue("#user-name");
  email = getInputValue("#user-email");
  password1 = getInputValue("#user-password1");
  password2 = getInputValue("#user-password2");
  img = $("#user-picture")[0].files[0];
  // Validation of form inputs

  if (name.length > 3 && password1 == password2) {
    createUserWithEmailAndPassword(auth, email, password1)
      .then((userCredential) => {
        const user = userCredential.user;
        const storage = getStorage();
        const profileRef = ref(storage, "users/" + user.uid + "/profile.jpg");
        uploadBytes(profileRef, img)
          .then((snapshot) => {
            console.log("Profile picture Uploaded");
            getDownloadURL(
              ref(storage, "users/" + user.uid + "/profile.jpg")
            ).then((url) => {
              imgUrl = url;
            });
            updateProfile(user, {
              displayName: name,
              photoURL: imgUrl,
            });
          })
          .catch((err) => {
            console.log(err);
          });

        console.log(userCredential);
        handleUserLoggedIn(user);
      })
      .catch((err) => {
        console.log(err);
      });
    $("#signup-form").trigger("reset");
  } else {
    alert("Please check your form and try again");
  }

  // console.log(name, password1, email);
});

$(".logout-button").click(() => {
  var logout = confirm("Are you sure to logout?");
  if (logout) {
    auth.signOut();
    handleUserLoggedOut();
  } else {
    console.log("Request Dismissed");
  }
});
