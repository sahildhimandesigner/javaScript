
const getAllTask = () => {

    firebase.database().ref('allTaskDetails').on('value', function(snapshot) {   
    if(snapshot.exists()){
        var taskName = "";
        var date = "";
        snapshot.forEach(function(data){
            var val = data.val();  
            console.log(val.addTheInfo);            
             taskName += val.addTheInfo += "<br />";
             date += val.date += "<br />";
            
          });
          document.getElementById("taskTable").innerHTML = taskName + date;
        }
    });


    // var starCountRef = firebase.database().ref('allTaskDeta/-M-rw_7zzqkh2ZCZZDPc');
    // starCountRef.on('value', function(snapshot) {
    //   updateStarCount(postElement, snapshot.val());
    // });
    // console.log(starCountRef)
    // if(snapshot.exists()){
    //     
    // }
}

window.onload = getAllTask();