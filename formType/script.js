init();

//BIND THE FUNCTION, ID AND CLASSES
document.getElementById("addInput").addEventListener('click', openModel);
document.querySelector('.closeModal').addEventListener('click', closeModal)
document.querySelector("#add").addEventListener('click', selectInputType);
document.querySelector('.form-container').style.display = 'none';

//CREATED THE FUNCTION FOR CLOSE THE MODAL
function closeModal(){
    document.querySelector(".modal").style.display = 'none';
    document.querySelector('body').classList.remove('modal-overlay');
}

//CREATED THE FUNCTION FOR OPEN MODAL
function openModel(){
    document.querySelector(".modal").style.display = 'block';
    document.querySelector('body').classList.add('modal-overlay');
}

//CREATED THE FUNCTION FOR SELECT THE FORM TYPE, NAME, ID AND VALUE
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
    document.querySelector(".submit-btn").innerHTML = `<input class="sub-btn" type="submit" value="submit" />`
    document.querySelector(".sub-btn").addEventListener('click', submitForm);
}

closeModal();

//DISPLAY THE INPUT VALUE ON FRONTEND
function submitForm() {
    inputValue = document.querySelector(`#${inputId}`).value;
    document.querySelector(".show_input_value").textContent = inputValue;
}

//CREATED THE FUNCTION FOR DECALARE THE VARRIABLE
function init() {
    var inputType, lableName, inpuName, inputId, storeId;
}

