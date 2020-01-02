
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

  // Refrence to message collection or We have initialize the firebase database
  var messageRef = firebase.database().ref("message");


  //Listen for form submit
  document.getElementById("contactForm").addEventListener("submit", submitForm);

  //create the function to submit the form

  function submitForm(e) {
    e.preventDefault(); 

    // //get the value of all input    

    var user_name = getInputVal("firstName");
    var last_Name = getInputVal("userLastName");
    var user_email = getInputVal("userEmail");
    var user_phone = getInputVal("userPhone");
    var user_message = getInputVal("userMessage");   
    
    // //save the message    
    if(user_name === "") {
      document.getElementById("firstNameError").innerHTML = "Enter the user name";
    }
    else {
      document.getElementById("firstNameError").innerHTML = "";
    }
    if (last_Name === "") {
      document.getElementById("firstLastError").innerHTML = "Enter the user email";
    }
    else {
      document.getElementById("firstLastError").innerHTML = "";
    }
    if (user_email === "") {
      document.getElementById("firstEmailError").innerHTML = "Enter the user email";
    }
    else {
      document.getElementById("firstEmailError").innerHTML = "";
    }
    if (user_phone === "") {
      document.getElementById("phoneNumber").innerHTML = "Enter the user phone";
    }    
    if(isNaN(user_phone)){
      document.getElementById("phoneNumber").innerHTML = "Enter the numeric value";
    }
    else if(user_phone.length !== 11){
      document.getElementById("phoneNumber").innerHTML = "Please enter valid mobile number";      
    }
    else if(user_phone === ""){
      document.getElementById("phoneNumber").innerHTML = "";
    }    
    else {
      saveMessage(user_name, last_Name, user_email, user_phone, user_message);  
      document.querySelector("h1").innerHTML = "user added succesfully";
    }    
  }

  //created the function to validation if there user enter the value then clear the validation message

function formValidation(user_name, last_Name, user_email){  
    var user_name = getInputVal("firstName");
    var last_Name = getInputVal("userLastName");
    var user_email = getInputVal("userEmail");    

  if(user_name) {
    document.getElementById("firstNameError").innerHTML = "";    
   }
   if(last_Name) {
    document.getElementById("firstLastError").innerHTML = "";    
   }
   if(user_email) {
    document.getElementById("firstEmailError").innerHTML = "";    
   }
}

function contactNumber(user_phone){
  var user_phone = getInputVal("userPhone");
  if(user_phone.length !== 10){
    document.getElementById("phoneNumber").innerHTML = "enter the valid number";     
  } 
  else {
    document.getElementById("phoneNumber").innerHTML = "";
  }
}
  //function to get form value rather then repeating the document.get 

  function getInputVal(id){    
    return document.getElementById(id).value;  
  }

  // save the contact info to firbase

  function saveMessage(name, lastName, email, phone, message) {    
    var newMessageRef = messageRef.push();
    newMessageRef.set({
        name: name,
        lastName: lastName,
        email: email,
        phone: phone,
        message: message
    });
  }