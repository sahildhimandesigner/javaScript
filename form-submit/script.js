varInit();

document.getElementById("user-form").addEventListener('submit', getFormValue);

function getFormValue(e) {  
    e.preventDefault();  
    userName = document.querySelector('#userName').value;    
    bike = document.querySelector("#bike").checked;
    sex = document.querySelector('input[name = "gender"]:checked').value;
    syc = document.querySelector("#selectCar").value;
    secondForm(userName, bike, sex, syc)
}

function secondForm(userName, bike, sex, syc) {
    var genderValues = { male: 0, female: 1 }
    document.querySelector("#userName2").value = userName;
    document.querySelector("#bike2").checked = bike;    
    document.getElementsByName('gender1')[genderValues[sex]].checked = true;
    document.querySelector("#selectedCar").value = syc;
}

function varInit() {
    var userName, bike, sex, syc;
}