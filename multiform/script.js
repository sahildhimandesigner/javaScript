var lable, inType, inputBox;

function addInput() {          
    lable = document.querySelector("#lable").value;
    inType = document.querySelector("#inpuType").value;

    if(lable === "" && inType == "") {
        alert('enter the input value')
    } else {
        var inputBox = `<lable>${lable}</lable> <br /> <input type=${inType} class="input-box" /> <br /><br />`;
        document.querySelector("#addInputBox").innerHTML += inputBox;
        document.querySelector("#submitbth").innerHTML = `<button class='sub-btn'>Submit</button>`
        document.querySelector(".sub-btn").addEventListener('click', submitForm);

        document.querySelector("#lable").value ='';
        document.querySelector("#inpuType").value ='';
    } 
}

function submitForm() {    
    var array = document.getElementsByClassName('input-box');     
    text = [];
    for(i = 0; i < array.length; i++) {        
        document.getElementsByClassName('input-box')[i].value
    }
}



