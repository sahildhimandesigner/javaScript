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
  var userData = {};
  // created the welcome function to get the data from local storage
  function welcome() {    
   var userData = JSON.parse(localStorage.getItem('userEmailKey'));
   var userEmail = userData.email;   
   console.log(userData)
   //if user data is there then load it   
   if(userData){
     document.getElementById("userInfo").innerHTML = userEmail; 
   }  
  } 

  // call the welcome function on load when user redirect on welcome page
  window.onload = welcome(); 

// clear the localstorge when user logged out
   function logoutUser(){
     firebase.auth().signOut().then(function() {
       window.location.href="login.html";
        localStorage.removeItem('userEmailKey');
     }).catch(function(error) {
       console.log(error)
     });
   }


   function getAllUserData() {
    var database = firebase.database();
    var userData = JSON.parse(localStorage.getItem('userEmailKey'));    
    // loadingData();    
    console.log('step 1',userData);
      database.ref(`message/${userData.uid}`).once('value', function(snapshot){
        console.log('step 2',snapshot.exists());
        if(snapshot.exists()){
            document.getElementById("data_loading").style.display = "none";
            var content = '';            
            snapshot.forEach(function(data){
                var val = data.val();                
                var userName = val.name;
                var name = (userName) ? userName : 'Name not provided';
                content +='<tr>';
                content += '<td width="20%">' + name + '</td>';
                content += '<td width="20%">' + val.email + '</td>';
                content += '<td width="20%">' + val.phone + '</td>';
                content += '<td width="20%">' + val.lastName + '</td>';
                content += '<td width="20%">' + val.message + '</td>';                
                content += '</tr>';                
                document.getElementById("ex-table").innerHTML += content;             
            });
          }
        });
      }

   var usDa = window.onload = getAllUserData();

  //  function loadingData() {
  //     setInterval(function(){
  //       document.getElementById("data_loading").innerHTML = "Loading..."
  //     },3000)      
  //  }