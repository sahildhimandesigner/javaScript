

function inputValue() {
    var firstValue = document.getElementById("firstValue").value;
    var secondValue = document.getElementById("secondValue").value;
    if (!firstValue || !secondValue || isNaN(firstValue) || isNaN(secondValue)) {        
        document.getElementById("error").innerHTML = "enter the value";
        return false;
    }
    else {
        document.getElementById("error").innerHTML = "";
        return [firstValue, secondValue];
    }
}

function inputValidation(){
    var firstValue = document.getElementById("firstValue").value;
    var secondValue = document.getElementById("secondValue").value;
    if (firstValue && secondValue) {        
        document.getElementById("error").innerHTML = "";
        return false;
    }
}

console.log(firstValue, secondValue);

function addValue() {
    var inputNumber = inputValue();
    if (inputNumber) {
        var addTwoValue = (parseFloat(inputNumber[0]) + parseFloat(inputNumber[1]))    
        document.getElementById("showResult").innerHTML = "Result = " + inputNumber[0] + " + " + inputNumber[1] + " = "+ addTwoValue;   
    }
}

function subtractValue() {
    var inputNumber = inputValue();
    if(inputNumber){
        var addTwoValue = (inputNumber[0] - inputNumber[1])    
        document.getElementById("showResult").innerHTML = "Result = " + inputNumber[0] + " - " + inputNumber[1] + " = "+ addTwoValue;    
    }
}

function dividetValue() {
    var inputNumber = inputValue();
    if(inputNumber){
        var addTwoValue = (inputNumber[0] / inputNumber[1]) 
        document.getElementById("showResult").innerHTML = "Result = " + inputNumber[0] + " / " + inputNumber[1] + " = "+ addTwoValue;
    }
}

function multiplyValue() {
    var inputNumber = inputValue();
   if(inputNumber){
        var addTwoValue = (inputNumber[0] * inputNumber[1])    
        document.getElementById("showResult").innerHTML = "Result = " + inputNumber[0] + " * " + inputNumber[1] + " = "+ addTwoValue;
   }
}

function percentageValue() {
    var inputNumber = inputValue();
    if(inputNumber){
        var addTwoValue = (inputNumber[0] * 100) / inputNumber[1];     
        document.getElementById("showResult").innerHTML = "Result = " + inputNumber[0] + " % " + inputNumber[1] + " = "+ addTwoValue;
   }
}

function bmsValue() {
    var inputNumber = inputValue();
    if(inputNumber){
        var addTwoValue = (inputNumber[0] / (inputNumber[1] * inputNumber[1]))    
        document.getElementById("showResult").innerHTML = "Result = " + inputNumber[0] + " * " + inputNumber[1] + " = "+ addTwoValue;
    }
}

function clearValue(){
    document.getElementById("firstValue").value = "";
    document.getElementById("secondValue").value = "";
    document.getElementById("showResult").innerHTML = "";   
    document.getElementById("error").innerHTML = "";
}