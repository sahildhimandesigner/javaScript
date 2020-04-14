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

// function getP() {
//     debugger;
//     var nbP = document.getElementById("nombreP").value;
//     var inputContainer = document.getElementById("inutContainer");

//     for (i = 0; i < nbP; i++) {
//         debugger;
//         newForm = document.createElement("input");
//         newForm.setAttribute("type", "text");
//         newForm.setAttribute("id", "form"+i);
//         inputContainer.appendChild(newForm);
//         inputContainer.appendChild(document.createElement("br"));
//         var a = document.getElementById("inutContainer");
//         var p = a.getElementsByTagName("input")[i];
//         var f = p.getAttribute("id");
//         console.log(p, 'input');
//         console.log(f,'get id')
//     }
// }

// function add() {
//     count = 1;
// }

// var d = inputContainer.querySelector("input");
//            c = d.getAttribute("id", "form"+i);


