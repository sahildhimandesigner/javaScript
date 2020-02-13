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

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  // clear the localstorge when user logged out
  function logoutUser(){
    firebase.auth().signOut().then(function() {
      window.location.href="login.html";
       localStorage.removeItem('userEmailKey');
    }).catch(function(error) {
      console.log(error)
    });
  }


  // created the welcome function to get the data from local storage
  function welcome() {    
    var userData = JSON.parse(localStorage.getItem('userEmailKey'));
    var userEmail = userData.email;      
    //if user data is there then load it   
    if(userData){
      document.getElementById("userInfo").innerHTML = userEmail; 
    }  
   } 

    // call the welcome function on load when user redirect on welcome page
    window.onload = welcome(); 
