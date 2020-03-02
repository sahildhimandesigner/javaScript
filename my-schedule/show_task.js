

const getAllTask = (flag) => {    
    firebase.database().ref('allTaskDetails').on('value', function(snapshot) { 
    var tableContent = '';
    if(snapshot.exists()){        
        snapshot.forEach(function(data){
            var val = data.val();            
            var tableKey = data.key
            
            if(flag == 'list') { //pass the false value so that it will show the default table structure
                tableContent = showUserTaskList(tableContent, val, tableKey, false)
            }
            else { // pass the flag as parameter so that we can show the edit table on click edit button
                tableContent = showUserTaskList(tableContent, val, tableKey, flag)
            }
          });          
        }
        document.getElementById("taskTable").innerHTML = tableContent;
        //Call the date pickert after loded the task list in DOM
        $(".datepicker").datepicker();        
    });
}

const cancelData = () => {
    getAllTask('list')
}

const showUserTaskList = (tableContent, val, tableKey, id) => {
    if(id == tableKey) { //If the row id is equal to table id not display the default value
        tableContent += '<tr id="'+tableKey+'" style="display:none;">'
    } else { 
        tableContent += '<tr id="'+tableKey+'">'
    }
    
    tableContent += '<td>' + val.addTheInfo + '</td>'
    tableContent += '<td>' + val.task + '</td>'
    tableContent += '<td>' + val.date + '</td>'
    tableContent += '<td>' + '<button onclick="taskRemoved(\''+tableKey+'\')">Remove</button>'+'</td>'
    tableContent += '<td>' + '<button onclick="getAllTask(\''+tableKey+'\')">Edit</button>'+ '</td>'
    tableContent += '<td>' + '<button onclick="">Done</button>'+ '</td>'
    tableContent += '</tr>'
    if(id == tableKey) {
        tableContent += '<tr id="edit_'+tableKey+'">'
    } else {
        tableContent += '<tr id="edit_'+tableKey+'" style="display:none;">'
    }
    tableContent += '<td>' + '<input type="text" name="addTheInfo_'+tableKey+'" value=' + val.addTheInfo +' id="addInfo" />'+ '</td>'
    tableContent += '<td>' + '<input type="text" class="datepicker" name="date_'+tableKey+'" value=' + val.date +' />'+ '</td>'
    tableContent += '<td>' + '<textarea id="taskName" name="task_'+tableKey+'"> ' + val.task +'</textarea>'+ '</td>'
    tableContent += '<td>' + '<button onclick="updateTaskList(\''+tableKey+'\')">Update</button>'+ '</td>'
    tableContent += '<td>' + '<button onclick="cancelData()">Cancel</button>'+ '</td>'
    tableContent += '</tr>'
    
    return tableContent;
}

window.onload = getAllTask("list");
    
const updateTaskList = (tableKey) => {
    var database = firebase.database();
    var upUserName = document.getElementsByName('addTheInfo_'+tableKey)[0].value;
    var date = document.getElementsByName('date_'+tableKey)[0].value;
    var task = document.getElementsByName('task_'+tableKey)[0].value;  
    console.log(upUserName, tableKey, 'upUserName')  
    database.ref(`/allTaskDetails`).child(tableKey).update({addTheInfo: upUserName, date: date, task: task})
    
    getAllTask("list")
}


const taskRemoved = (tableKey) => {
    console.log(tableKey, 'remove tableKey')

    var database = firebase.database();

    database.ref('allTaskDetails/').child(tableKey).remove();    
    getAllTask("list")
}