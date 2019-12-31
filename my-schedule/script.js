
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
    // e.preventDefault(); 
    // console.log(123)

    // //get the value of all input

    var name = getInputVal("firstName");
    var lastName = getInputVal("lastName");
    var email = getInputVal("email");
    var phone = getInputVal("phone");
    var message = getInputVal("message");

    // //save the message
    saveMessage(name, lastName, email, phone, message);
    
  }

  //function to get form value rather then repeating the document.get 

  function getInputVal(id){
    return document.getElementById(id).value;
  }

  // save the contact info to firbase

  function saveMessage(name, lastName, email, phoneNumber, message) {
    var newMessageRef = messageRef.push();
    console.log(name, lastName, email, phoneNumber, message)
    newMessageRef.set({
        name: name,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
        message: message
    });
  }