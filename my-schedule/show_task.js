

const getAllTask = (flag) => {    
    firebase.database().ref('allTaskDetails').on('value', function(snapshot) {   
        var tableContent = "";
    if(snapshot.exists()){        
        snapshot.forEach(function(data){
            var val = data.val();            
            var tableKey = data.key
            
            if(flag == 'list') {
                tableContent = showUserTaskList(tableContent, val, tableKey)
            }
            else {
                tableContent = editTaskList(tableContent, val)
            }
            //tableContent = editTaskList(tableContent, val)
          });          
        }
        document.getElementById("taskTable").innerHTML = tableContent;
    });
}


const taskRemoved = () => {
    alert("removed the task")
}

const taskDone = () => {
    alert("Done the task")
}

//Edit Task List Function
const editTaskList = (tableContent, val) => {
    
    tableContent += '<tr>'
    tableContent += '<td>' + '<input type="text" name="task" value=' + val.task +' id="taskName" />'+ '</td>'
    tableContent += '<td>' + '<input type="text" name="task" value=' + val.date +' id="datepicker" />'+ '</td>'
    tableContent += '<td>' + '<textarea name="addTheInfo" id="addInfo"> ' + val.addTheInfo +'</textarea>'+ '</td>'
    tableContent += '<td>' + '<button onclick="taskDone()">Update</button>'+ '</td>'
    tableContent += '<td>' + '<button>Cancel</button>'+ '</td>'
    tableContent += '</tr>'

    return tableContent;
}

const showUserTaskList = (tableContent, val, tableKey) => {    
    console.log(tableKey, 'tableKeytableKey')
    tableContent += '<tr>'
    tableContent += '<td>' + val.addTheInfo + '</td>'
    tableContent += '<td>' + val.task + '</td>'
    tableContent += '<td>' + val.date + '</td>'
    tableContent += '<td>' + '<button onclick="taskRemoved()">Remove</button>'+'</td>'
    tableContent += '<td>' + '<button onclick="getAllTask(\''+tableKey+'\')">Edit</button>'+ '</td>'
    tableContent += '<td>' + '<button onclick="taskDone()">Done</button>'+ '</td>'
    tableContent += '</tr>'
    
    return tableContent;
}

window.onload = getAllTask("list");