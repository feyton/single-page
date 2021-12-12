import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import {
  child,
  get,
  push,
  ref as databaseRef,
  set,
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-storage.js";
import {
  auth,
  database,
  handleUserLoggedIn,
  handleUserLoggedOut,
  handleUserLoginError,
} from "./base.js";
import {
  blogDetailView,
  createPostView,
  homeHtml,
  loginView,
  renderHomePostDiv,
  signupView,
} from "./templates.js";
var mainDiv = $("#main-container");
$(document).ready(() => {
  // Routing
  var mainDiv = $("#main-container");
  // console.log(mainDiv.text());
  if (mainDiv.text() == "") {
    renderHome();
  }

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
  function displayLoader(state) {
    if (state == true) {
      $(".loader-bar").removeClass("d-none");
      $(".load-juice").addClass("animate");
    } else {
      $(".loader-bar").addClass("d-none");
      $(".load-juice").removeClass("animate");
    }
  }

  function renderHome() {
    handlePathnameHistory("", "Fabrice| Home");
    displayLoader(true);

    var postRefList = databaseRef(database, "posts");
    get(postRefList)
      .then((snapshot) => {
        if (snapshot.exists()) {
          // console.log(snapshot.key);

          // console.log(snapshot.val());
          // console.log(snapshot.val());
          mainDiv.html("");
          mainDiv.html(homeHtml);

          for (let i = 1; i <= snapshot.size; i++) {
            var data = snapshot.val();
            Object.keys(data).forEach((key) => {
              var userPosts = snapshot.val()[key];
              Object.keys(snapshot.val()[key]).forEach((key2) => {
                var post = userPosts[key2];
                var postId = key + "/" + key2;
                // console.log(postId);
                if (post.author_name)
                  renderHomePostDiv(
                    post.imageURL,
                    post.title,
                    postId,
                    post.summary,
                    post.author_name,
                    post.date
                  );
              });
            });

            console.log("Loaded data");
            displayLoader(false);
          }
          var posts = Object.keys(snapshot.val());
          if (posts.length > 1) {
            console.log("now I can acess pots", posts);
          }
        } else {
          console.log("No data found");
        }
      })
      .catch((err) => {
        console.log(err);
        setTimeout(() => {
          renderHome();
        }, 1000);
      });

    mainDiv.html("");
    mainDiv.html(homeHtml);
  }
  function handlePathnameHistory(path, title) {
    var host = window.location.host;

    // Used to change the url
    var nextUrl = host + path;

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
      $(".loader").css("display", "block");
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
              $("#signup-form").trigger("reset");
              $(".loader").css("display", "none");
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
  // Rendering blog details

  mainDiv.on("click", "read-post", (e) => {
    e.preventDefault();
    renderPostDetail;
  });

  function renderPostDetail() {
    handlePathnameHistory("signup", "SignUp| Fabrice");
    mainDiv.html("");
    mainDiv.html(blogDetailView);
  }

  $(".nav-link.create").on("click", (e) => {
    e.preventDefault();
    renderPostCreate();
  });

  function renderPostCreate() {
    mainDiv.html("");
    mainDiv.html(createPostView);
    tinymce.init({
      selector: "#post-content-create",
      plugins:
        "a11ychecker advcode casechange export formatpainter linkchecker autolink lists checklist media mediaembed pageembed permanentpen powerpaste table advtable tinycomments tinymcespellchecker",
      toolbar:
        "a11ycheck addcomment showcomments casechange checklist code export formatpainter pageembed permanentpen table",
      toolbar_mode: "floating",
      tinycomments_mode: "embedded",
      tinycomments_author: "Author name",
    });
  }
  // Initializing the tinymyce editor

  // Handle Post Creation

  mainDiv.on("submit", "#create-post-form", () => {
    $(".loader-bar").removeClass("d-none");
    // alert("submitted");
    var title, img, content, published, summary;
    title = getInputValue("#post-title-create");
    img = $("#post-picture")[0].files[0];
    content = getInputValue("#post-content-create");
    summary = getInputValue("#post-summary-create");
    var published_check = getInputValue("#post-published");
    if (published_check == "on") {
      published = "true";
    } else {
      published = "false";
    }
    console.log(title, published);
    // auth = getAuth();
    var user = auth.currentUser;
    if (user) {
      // console.log(user.displayName);
      $(".loader").css("display", "block");
      savePost(title, img, content, user, published, summary);
      $(".loader").css("display", "none");
    } else {
      alert("You must be logged in to create");
    }
  });

  function savePost(title, img, content, user, published, summary) {
    // var user = auth.currentUser;
    // var postRef = databaseRef(database, "posts/" + user.uid);

    // var authorRef = databaseRef(database, "author/" + user.uid);
    // var usersPostRef = databaseRef(database, "user-posts/" + user.uid + "/");
    var imgURL;
    var newPostRef = push(
      child(databaseRef(database), "posts/" + user.uid)
    ).key;
    var newuserPostRef = push(
      child(databaseRef(database), "user-posts/" + user.uid)
    ).key;
    var storage = getStorage();
    var postImageRef = ref(
      storage,
      "posts/" + user.uid + "/" + newPostRef + "/" + img.name
    );
    // var newPostRef = postRef.push();
    var uploadTask = uploadBytesResumable(postImageRef, img);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(progress);

        $(".load-juice").css("width", progress + "%");
      },
      (err) => {
        console.log("Unable to upload the image", err);
      },
      () => {
        getDownloadURL(
          ref(storage, "posts/" + user.uid + "/" + newPostRef + "/" + img.name)
        )
          .then((url) => {
            imgURL = url;
            console.log(imgURL);
            const postData = {
              title: title,
              content: content,
              published: published,
              imageURL: imgURL,
              author: user.uid,
              summary: summary,
              author_name: user.displayName.split(" ")[0],
              date: new Date().toDateString().split(" ").slice(1).join(" "),
            };
            set(
              databaseRef(database, "posts/" + user.uid + "/" + newPostRef),
              postData
            );
            set(
              databaseRef(
                database,
                "user-posts/" + user.uid + "/" + newuserPostRef
              ),
              postData
            );

            console.log("New Post Created");
            $("#create-post-form").trigger("reset");
            $(".loader-bar").addClass("d-none");
          })
          .catch((err) => {
            console.log(err);
          });
      }
    );
  }

  function saveComment(postId, comment) {
    var commentRef = ref(database, "comments/" + user.uid);
    var postCommentRef = ref(database, "post-comments/" + postId);
    push(data);
  }

  // Listing posts on homepage

  // Post Details

  mainDiv.on("click", ".read-post", (e) => {
    e.preventDefault();
    console.log(e);
    var postId = $(this).attr("href");
    console.log(postId);
    var postRef = databaseRef(database, "posts/" + postId);
    get(postRef)
      .then((snapshot) => {
        console.log(snapshot);
        if (snapshot.exists()) {
          console.log(snapshot.val());
        } else {
          alert("The post you are trying to access does not exist");
          console.log(postRef);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
});
