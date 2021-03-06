  var userInfomation = "";

  document.getElementById("loginForm").addEventListener("submit", loginUser);


  function loginUser(e) {
    e.preventDefault();

    var loginUserEmail = document.getElementById("user_email").value;
    var loginUserPassword = document.getElementById("user_password").value;

    if(loginUserEmail === ""){
      document.getElementById("user_email_error").innerHTML = "Enter the input value"
    }
    else {
      document.getElementById("user_email_error").innerHTML = ""
    }

    if(loginUserPassword === ""){
      document.getElementById("user_pasw_error").innerHTML = "Enter the value"
    }
    else{

    firebase.auth()
    .signInWithEmailAndPassword(loginUserEmail, loginUserPassword)
      .then(function(sucess) {
        console.log(sucess, 'sucess')
      })
  .catch(function(error) {
    console.log(error, 'error')
    
    var errorCode = error.code;
    var errorMessage = error.message;

    document.getElementById("user_email_error").innerHTML = errorMessage;
    console.log(errorCode)
    // ...
  });
    }
  }

  function loginFormValidation() {
    var loginUserEmail = getLoginFormVal("user_email");
    var loginUserPassword = getLoginFormVal("user_password");

    if(loginUserEmail === ""){
      document.getElementById("user_email_error").innerHTML = "Enter the input value"
    }
    else {
      document.getElementById("user_email_error").innerHTML = ""
    }

    if(loginUserPassword.length === ""){
      document.getElementById("user_pasw_error").innerHTML = "Enter the value"
    }
    else{
      document.getElementById("user_pasw_error").innerHTML = ""
    }

  }

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.      
      var user = firebase.auth().currentUser;
      if(user != null){                    
        
        localStorage.setItem('userEmailKey', JSON.stringify(user));
        console.log(userInfomation, 'userInfomation')
        window.location.href="welcome.html";        
      }
      
    } else {      
      console.log("no user logged in")
    }
  });

  function getLoginFormVal(id){
    return document.getElementById(id).value;
  }

