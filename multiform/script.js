//Created the function and call on button click.
function addInput() {          
    var lable, inType, inputBox;
    //Get value of input filed and store in var.
    lable = document.querySelector("#lable").value;
    inType = document.querySelector("#inpuType").value;

    //Show alert if user click on add button without enter the input.
    if(lable === "" && inType == "") {
        alert('enter the input value')
    } else {
        var inputBox = `<lable>${lable}</lable> <br /> <input type=${inType} class="input-box" /> <br /><br />`;
        document.querySelector("#addInputBox").innerHTML += inputBox;
        document.querySelector("#submitbth").innerHTML = `<button class='sub-btn'>Submit</button>`
        document.querySelector(".sub-btn").addEventListener('click', submitForm);

        //Clear value after click on add button
        document.querySelector("#lable").value ='';
        document.querySelector("#inpuType").value ='';
    } 
}

function submitForm() {    
    var array = document.getElementsByClassName('input-box');         
    var show = '&nbsp;';
    for(i = 0; i < array.length; i++) {        
        show +=`<div class="block"> ${document.getElementsByClassName('input-box')[i].value}</div>`
    }       
    document.getElementById("show").innerHTML = show;
}