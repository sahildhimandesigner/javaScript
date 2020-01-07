  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAgJf3PEXIZmiQqWXv5gPuCpv2CBT-CGiE",
    authDomain: "contactform-cab54.firebaseapp.com",
    databaseURL: "https://contactform-cab54.firebaseio.com",
    projectId: "contactform-cab54",
    storageBucket: "contactform-cab54.appspot.com",
    messagingSenderId: "864200746629",
    appId: "1:864200746629:web:13829f38a486c2e0086bec",
    measurementId: "G-P90P23VV0L"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  

  document.getElementById("loginForm").addEventListener("submit", loginUser);


  function loginUser(e) {
    e.preventDefault();

    var loginUserEmail = getLoginFormVal("user_email");
    var loginUserPassword = getLoginFormVal("user_password");

    console.log(loginUserEmail + loginUserEmail)
    
    firebase.auth()
      .signInWithEmailAndPassword(loginUserEmail, loginUserPassword)
        .then(function(sucess) {
          console.log(sucess, 'sucess')
        })
    .catch(function(error) {
      console.log(error, 'error')
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;

      document.getElementById("user_email_error").innerHTML = errorMessage;
      console.log(errorCode)
      // ...
    });
  }


  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.      
      var user = firebase.auth().currentUser;
      console.log(user)
      if(user != null){        
        console.log(emailId, "email id of user")        
        window.location.href="welcome.html";              
        var emailId = user.email;
        // window.onload = document.getElementById("userInfo").innerHTML = "welcome user " + emailId;
        
      }
      
    } else {      
      console.log("no user logged in")
    }
  });

  function getLoginFormVal(id){
    return document.getElementById(id).value;
  }

  function logoutUser(){
    firebase.auth().signOut().then(function() {
      window.location.href="login.html";

    console.log("user loggout noew")
    }).catch(function(error) {
      // An error happened.
      console.log(error)
    });
  }