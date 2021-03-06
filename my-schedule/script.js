
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
    var user_phone = getInputVal("userPhone");
    var user_email = getInputVal("userEmail");
    var user_message = getInputVal("userMessage");
    var user_password = getInputVal("user_Password");
    var user_confirm_password = getInputVal("user_Confirm_Password");   

    
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
    if (user_password === "") {
      document.getElementById("password_Error").innerHTML = "Enter the password";
    }
    if (user_confirm_password === "") {
      document.getElementById("confirm_password_Error").innerHTML = "Confirm your password";
    }
    else if(user_password != user_confirm_password) {
      document.getElementById("confirm_password_Error").innerHTML = "password not match";
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
      saveMessage(user_name, last_Name, user_email, user_phone, user_message, user_password, user_confirm_password);  
            
      document.querySelector("h1").innerHTML = "user added succesfully";      
      setTimeout(function(){
        document.querySelector("h1").innerHTML = "";
      }, 3000)      
    }    
  }

  const abc = () => {    
    const a = messageRef.push().getKey();     
    console.log(a)
    
    var allUserData = localStorage.getItem('allUserProfileData');
    console.log(allUserData, "allUserData")   
  }

  //created the function to validation if there user enter the value then clear the validation message

  function formValidation(user_name, last_Name, user_email, user_password, user_confirm_password){  
      var user_name = getInputVal("firstName");
      var last_Name = getInputVal("userLastName");
      var user_email = getInputVal("userEmail");    
      var user_password = getInputVal("user_Password");
      var user_confirm_password = getInputVal("user_Confirm_Password");  

    if(user_name) {
      document.getElementById("firstNameError").innerHTML = "";    
    }
    if(last_Name) {
      document.getElementById("firstLastError").innerHTML = "";    
    }
    if(user_email) {
      document.getElementById("firstEmailError").innerHTML = "";    
    }
    if(user_password) {
      document.getElementById("password_Error").innerHTML = "";    
    }
    if(user_confirm_password) {
      document.getElementById("confirm_password_Error").innerHTML = "";    
    }
    else if(user_password != user_confirm_password) {
      document.getElementById("confirm_password_Error").innerHTML = "";
    }
  }

  //Created the function for number so that it will not create problem
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

  function saveMessage(name, lastName, email, phone, message, password, confirm_password) {     
    var verifyUser = firebase.auth().createUserWithEmailAndPassword(email, password);  
    verifyUser.then(data => {
      const { uid } = data.user;
    var messageRef2 = firebase.database().ref(`message/${uid}`);         
    var newMessageRef = messageRef2.push()
    newMessageRef.set({
        name: name,
        lastName: lastName,
        email: email,
        confirm_password: confirm_password,
        phone: phone,
        message: message
    }).then((data) => {
      console.log('dta', data);
    });
  })
}

  // var getUserList = firebase.database().ref("message").get/( + userId);
  // console.log(getUserList, "getUserList")


  
  // const userId = '/-LxQYVjuLPCl8h5xURm1';

  // var mref = firebase.database().ref(`message/${userId}`);
  
  // mref.once("value").then(function(snapshot) {
  //   console.log(snapshot.val(), "user value")     
  // });
  // console.log(mref, 'mref');
  
  
  