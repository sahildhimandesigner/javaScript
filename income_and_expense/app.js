const addValue = () => {    
    var descInput = document.querySelector('.add__description').value;
    var ammountInput = document.querySelector('.add__value').value;        
    income(descInput, ammountInput);
    expense(descInput, ammountInput);
}

const getSelectValue = () => {
    alert('d')
}

var d = document.querySelector('.add__type').addEventListener('onChange', getSelectValue);

const income = (descInput, ammountInput) => {
    document.querySelector('.item__description').innerHTML = descInput;
    document.querySelector('.item__value').innerHTML = ammountInput;
}

const expense = (descInput, ammountInput) => {
    document.querySelector('.item__description').innerHTML = descInput;
    document.querySelector('.item__value').innerHTML = ammountInput;
}


document.querySelector('.add__btn').addEventListener('click', addValue)