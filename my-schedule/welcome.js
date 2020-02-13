  var userData = {};
  var val12 = {};
   // Created the function for updated the user table

      
   //pass the flag as parameter to show the data bassesd on this
   function getAllUserData(flag) {
    // Connected the firebase Database
    var database = firebase.database();

    // Get the iteams from local Storage
    var userData = JSON.parse(localStorage.getItem('userEmailKey'));

    document.getElementById("ex-table").innerHTML = '';
    
    var getUserId = userData.uid;

    database.ref(`message/${getUserId}`).once('value', function(snapshot){
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
          val12 = data.val();
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
      content += '<td width="20%">' + '<button onclick="updateUserTable(\''+userDataKey+  '\',\'' + getUserId+'\')">Update</button>' +'</td>';
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
     console.log('as', `message/${getUserId}`, id);
     var uptb = database.ref(`message/${getUserId}`).child(id).update({name: upUserName})     
     getAllUserData('list');
   }