init();

document.getElementById("addInput").addEventListener('click', openModel);
document.querySelector('.closeModal').addEventListener('click', closeModal)
document.querySelector("#add").addEventListener('click', selectInputType);
document.querySelector('.form-container').style.display = 'none';

function closeModal(){
    document.querySelector(".modal").style.display = 'none';
    document.querySelector('body').classList.remove('modal-overlay');
}

function openModel(){
    document.querySelector(".modal").style.display = 'block';
    document.querySelector('body').classList.add('modal-overlay');
}

function selectInputType() {
    inputType = document.querySelector("#selectInputType").value;
    inpuName = document.querySelector('#selectInputName').value;
    lableName = document.querySelector('#labelName').value;
    inputId = document.querySelector('#inputId').value;
    document.querySelector(".lable-name").innerHTML = `<label>${lableName}</label>`
    document.querySelector('.showInput').innerHTML = `<input type='${inputType}' value='${inpuName}' name='${inpuName}' id='${inputId}' />`    
    document.querySelector('.form-container').style.display = 'block';
    document.querySelector(".add-input-btn").style.display = 'none';
    closeModal()
}

closeModal();

function showUserValue() {
    // var showInputValue = document.getElementById(``).value;
    
}

function init() {
    var inputType, lableName, inpuName, inputId;
}
showUserValue()

