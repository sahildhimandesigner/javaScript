

const getAllTask = (flag) => {    
    firebase.database().ref('allTaskDetails').on('value', function(snapshot) { 
    var tableContent = '';
    if(snapshot.exists()){        
        snapshot.forEach(function(data){
            var val = data.val();            
            var tableKey = data.key
            
            if(flag == 'list') {
                tableContent = showUserTaskList(tableContent, val, tableKey, false)
            }
            else {
                tableContent = showUserTaskList(tableContent, val, tableKey, flag)
            }
          });          
        }console.log(tableContent);
        document.getElementById("taskTable").innerHTML = tableContent;
        
    });
}


const taskRemoved = () => {
    alert("removed the task")
}

const taskDone = () => {
    alert("Done the task")
}

const cancelData = () => {
    getAllTask('list')
}
const showUserTaskList = (tableContent, val, tableKey, id) => {
    if(id == tableKey) {
        tableContent += '<tr id="'+tableKey+'" style="display:none;">'
    } else {
        tableContent += '<tr id="'+tableKey+'">'
    }
    
    tableContent += '<td>' + val.addTheInfo + '</td>'
    tableContent += '<td>' + val.task + '</td>'
    tableContent += '<td>' + val.date + '</td>'
    tableContent += '<td>' + '<button onclick="taskRemoved()">Remove</button>'+'</td>'
    tableContent += '<td>' + '<button onclick="getAllTask(\''+tableKey+'\')">Edit</button>'+ '</td>'
    tableContent += '<td>' + '<button onclick="taskDone()">Done</button>'+ '</td>'
    tableContent += '</tr>'
    if(id == tableKey) {
        tableContent += '<tr id="edit_'+tableKey+'">'
    } else {
        tableContent += '<tr id="edit_'+tableKey+'" style="display:none;">'
    }
    tableContent += '<td>' + '<input type="text" name="addTheInfo" value=' + val.addTheInfo +' id="addInfo" />'+ '</td>'
    tableContent += '<td>' + '<input type="text" name="task" value=' + val.task +' id="taskName" />'+ '</td>'
    tableContent += '<td>' + '<textarea name="date" id="datepicker"> ' + val.date +'</textarea>'+ '</td>'
    tableContent += '<td>' + '<button onclick="taskDone()">Update</button>'+ '</td>'
    tableContent += '<td>' + '<button onclick="cancelData()">Cancel</button>'+ '</td>'
    tableContent += '</tr>'
    
    return tableContent;
}

window.onload = getAllTask("list");