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

   // Created the function for updated the user table
  //  const editDetails = (e) => {
  //    alert(e.id, "edit the user details")
  //  }

   // I have created the function fo delete the user
   const deleteDetails = () => {
    alert("Delete the user details")
   }

   //pass the flag as parameter to show the data bassesd on this
   function getAllUserData(flag) {
    // Connected the firebase Database
    var database = firebase.database();

    // Get the iteams from local Storage
    var userData = JSON.parse(localStorage.getItem('userEmailKey'));

    document.getElementById("ex-table").innerHTML = '';
    
    console.log('step 1', userData);

    var getUserId = userData.uid;

    database.ref(`message/${getUserId}`).once('value', function(snapshot){
      console.log('step 2',snapshot.exists());
        loggedInUserDetails(snapshot, flag, getUserId)
      });
    }
   
   // pass the two parameter to call this function and use in GETALLUSERDATA function   
   const loggedInUserDetails = (snapshot, flag, getUserId) => {
    if(snapshot.exists()){
      document.getElementById("data_loading").style.display = "none";
      var content = '';             
      snapshot.forEach(function(data){
          var val = data.val();   
          var userDataKey = data.key; 
          
          if(flag == 'list') {
            content = showtUserTableData(val,content)
          }
          else{
            content = eidtUserTableData(val, content, userDataKey, getUserId);
          }
          document.getElementById("ex-table").innerHTML += content;             
      });
     }
   }   

   // Created the seperate fucntion to show the user details and pass the parameter as value to function so the we function understading
   const showtUserTableData = (val, content) => {
        var userName = val.name;
        // declare the variable to show the custom message if the data is not exist
        var name = (userName) ? userName : 'Name not provided';
        content +='<tr>';
        content += '<td width="20%">' + name + '</td>';
        content += '<td width="20%">' + val.email + '</td>';
        content += '<td width="20%">' + val.phone + '</td>';
        content += '<td width="20%">' + val.lastName + '</td>';
        content += '<td width="20%">' + val.message + '</td>';
        content += '<td width="20%">' + '<button onclick="getAllUserData(\'update\')">Edit</button> <a href="javascript:void()" onclick=\"deleteDetails()\">Delete</a>' + '</td>';                
        content += '</tr>';
        //we have to return the content becuse we have to use this in other function
      return content;
 }

 // Created the seperate fucntion to show the user details with prefield input value and pass the parameter as value to function so the we function understading
   const eidtUserTableData = (val, content, userDataKey, getUserId) => {
      content +='<tr>'
      content +='<td width="20%">'+ '<input type="text" name="name" value="'+ val.name + '" size="20" />' +'</td>';
      content +='<td width="20%">'+ '<input type="text" name="lastName" value="'+ val.email + '" size="20" />' +'</td>';
      content +='<td width="20%">'+ '<input type="email" name="email" value="'+ val.phone + '" size="20" />' +'</td>';
      content +='<td width="20%">'+ '<input type="phone" name="" value="'+ val.lastName + '" size="20" />' +'</td>';
      content +='<td width="20%">'+ '<textarea name="message"> '+ val.message +'</textarea>' +'</td>';
      content += '<td width="20%">' + '<button onclick="updateUserTable(\''+userDataKey+  '\',\'' + getUserId + ' \')">Update</button>' +'</td>';
      content +='</tr>'
      //we have to return the content becuse we have to use this in other function
      return content;
   }

   //Pass the list as value to function so that we can check that is flas is equal to list then call SHOWUSERTABLEDATA otherwise editUserTableData
   var usDa = window.onload = getAllUserData('list');

   const updateUserTable = (id, getUserId) => {
    var database = firebase.database();
      
    //get the input value on click button bassed on input attribute
     var upUserName = document.getElementsByName('name')[0].value;
     alert(upUserName)
     var uptb = database.ref(`message/${getUserId}`).child(id).update({name: upUserName})
     
     console.log(uptb, "uptbuptbuptbuptbuptbuptb")

     getAllUserData('list');
   }