

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
    
    tableContent += '<td class="bg-gray-200 text-black">' + val.addTheInfo + '</td>'
    tableContent += '<td class="bg-gray-200 text-black">' + val.task + '</td>'
    tableContent += '<td class="bg-gray-200 text-black">' + val.date + '</td>'
    tableContent += '<td class="bg-gray-200 text-black">' + val.time + '</td>'
    tableContent += '<td class="bg-gray-200">' + '<button class="inline-block bg-white text-sm mr-5 px-4 py-2 leading-none border rounded text-black" onclick="taskRemoved(\''+tableKey+'\')">Remove</button>'+'<button class="inline-block text-sm px-4 py-2 leading-none bg-white border rounded text-black" onclick="getAllTask(\''+tableKey+'\')">Edit</button>' + '<button class="inline-block text-sm px-4 py-2 bg-white leading-none border rounded text-black" onclick="">Done</button>'+ '</td>'    
    tableContent += '</tr>'
    if(id == tableKey) {
        tableContent += '<tr id="edit_'+tableKey+'">'
    } else {
        tableContent += '<tr id="edit_'+tableKey+'" style="display:none;">'
    }
    tableContent += '<td>' + '<input type="text" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight" name="addTheInfo_'+tableKey+'" value=' + val.addTheInfo +' id="addInfo" />'+ '</td>'
    tableContent += '<td>' + '<input type="text" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight" class="datepicker" name="date_'+tableKey+'" value=' + val.date +' />'+ '</td>'
    tableContent += '<td>' + '<textarea  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight" id="taskName" name="task_'+tableKey+'"> ' + val.task +'</textarea>'+ '</td>'
    tableContent += '<td colspan="3" class="text-center">' + '<button class="inline-block text-sm px-4 py-2 leading-none border rounded mr-5 text-black" onclick="updateTaskList(\''+tableKey+'\')">Update</button>' + '<button class="inline-block text-sm px-4 py-2 leading-none border rounded text-black" onclick="cancelData()">Cancel</button>'+ '</td>'    
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