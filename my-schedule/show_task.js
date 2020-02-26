
const getAllTask = () => {
    firebase.database().ref('allTaskDetails').on('value', function(snapshot) {   
        var tableContent = "";
    if(snapshot.exists()){        
        snapshot.forEach(function(data){
            var val = data.val();
            tableContent = showUserTaskList(tableContent, val)            
          });          
        }
        document.getElementById("taskTable").innerHTML = tableContent;
    });
}



const taskRemoved = () => {
    alert("removed the task")
}

const taskEdit = () => {
    alert("Edit the task")
}

const taskDone = () => {
    alert("Done the task")
}

//Edit Task List Function
const editTaskList = (tableContent, val) => {
    tableContent += '<tr>'
    tableContent += '<td>' + val.addTheInfo + '</td>'
    tableContent += '<td>' + val.date + '</td>'
    tableContent += '</tr>'
}

const showUserTaskList = (tableContent, val) => {    
    tableContent += '<tr>'
    tableContent += '<td>' + val.addTheInfo + '</td>'
    tableContent += '<td>' + val.date + '</td>'
    tableContent += '<td>' + '<button onclick="taskRemoved()">Remove</button>'+'</td>'
    tableContent += '<td>' + '<button onclick="taskEdit()">Edit</button>'+ '</td>'
    tableContent += '<td>' + '<button onclick="taskDone()">Done</button>'+ '</td>'
    tableContent += '</tr>'
    
    return tableContent;
}

window.onload = getAllTask();