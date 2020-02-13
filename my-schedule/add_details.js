 
  var messageRef = firebase.database().ref("allTaskDetails");

  const saveToDoList = (e) => {
    e.preventDefault();

    const taskName = getFormInfo("taskName");
    const taskDate = getFormInfo("datepicker");
    const taskDetail = getFormInfo("addInfo");

    if(taskName === "") {
      document.getElementById("task_error").innerHTML = "Enter the task details"
    }
    else {
      document.getElementById("task_error").innerHTML = ""
    }
    if(taskDate === "") {
      document.getElementById("date_error").innerHTML = "Enter the task details"
    }
    else {
      document.getElementById("date_error").innerHTML = ""
    }
    if(taskDetail === "") {
      document.getElementById("details_error").innerHTML = "Enter the task details"
    }
    else {
      //Store the values in array
      var formCollection = {
          'taskName' : taskName,
          'taskDate' : taskDate,
          'taskDetail' : taskDetail,
      }
      saveTaskDetails(formCollection)  

      var completed = document.querySelector("h1").innerHTML = "Task Added";      
      document.getElementById("completedTask").innerHTML = completed;
      
      setTimeout(function(){
        document.getElementById("completedTask").innerHTML = "";
      }, 3000)            
    }
  }

  const checkValdation = () => {
    const taskName = getFormInfo("taskName");
    const taskDate = getFormInfo("datepicker");
    const taskDetail = getFormInfo("addInfo");

    if(taskName) {
      document.getElementById("task_error").innerHTML = ""
    }
    if(taskDate) {
      document.getElementById("date_error").innerHTML = ""
    }
    if(taskDetail) {
      document.getElementById("details_error").innerHTML = ""
    } 
  }

  document.getElementById("to_do_details").addEventListener("submit", saveToDoList);

  function getFormInfo(id){    
    return document.getElementById(id).value;  
  }

  const saveTaskDetails = (formCollection) => {    
      const dailyTaskDetails = firebase.database().ref("allTaskDetails")       
      const taskDetails = dailyTaskDetails.push()
      console.log(formCollection, 'formCollection.task')
      taskDetails.set({
        task: formCollection.taskName,
        date: formCollection.taskDate,
        time: dateTime(),
        addTheInfo: formCollection.taskDetail,
      })
  }
  
  const dateTime = () => {
    var todayDate = new Date();
    var hours = todayDate.getHours();
    var minutes = todayDate.getMinutes();
    var second = todayDate.getSeconds();  
    
    return hours +':'+ minutes +':'+ second;
  }

  console.log(dateTime())