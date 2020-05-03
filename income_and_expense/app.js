
//BUDGET CONTROLLER
var budegtController = (function(){
    
    //Some code
    //So we have created the function constructor
    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    }

    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    }

    //To store the mutliple expense and income value we use array
    //Rahter than create multiple empty array for expense and income 
    //We can create store that in object that is called data
    //This is good way of data structure and good way to keep it one place
    
    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    }

    //Here we create public methode. right here in budget controller 
    //that's gone allow to other module to add new iteam into our data structure 

    return {
        addItem: function(type, des, val){
            var newItem;

            //Here we check that user selecting which iteam income or expense
            if(type = 'exp') {
                //if user select the exp the it will create new object in Expense constructor
                newItem = new Expense (ID, des, val)
            } else if (type = 'inc') {
                //if user select the inc the it will create new object in Income constructor
                newItem = new Income (ID, des, val)
            }
        }
    }
})();

// UI CONTROLLER

var UIController = (function() {

    //DESCRIPTION ABOUT THE CONTROLLER--------------------------------
    //HERE IN UI CONTRLLER WE ARE GOING TO WRITE A PUBLIC METHODE OR FUNCTION.
    //SO IT CAN NOT BE PRIVATE FUNCTION.
    //THIS IS FUNCTION WHICH YOU HAVE TO USE IN OTHER CONTROLLER.
    //SO THIS FUNCTION EXECUTE IMMEDIATELY AND THE OBJECT WHICH WE RETURN THAT ASSIGN THIS CONTRLLER.
    //ALL THE VARRIABLE AND FUNCTION WHICH WE DEFINE WILL STAY IN CLOUSE AFTER THIS FUNCTOIN RETURN.
    //THIS OJECT WIHCH WE ARE GOING TO REUTN THAT HAVE ACCEES THE PRIVATE FUNCTION AND VARRIABLE.

    //SOME CODE

    //So here we have created on object so that in future if the ui classes name change then it will not create a problem.
    //We just need to change the value of the object key rather than updating all querySelctor.

    const DOMString = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
    }

    return {
        //Here we have created the methode and return a object becuse we can access it publically.
        getInput: function() {
            return {

                //So rather than defining multple var we create a object.
                //this methode return all these three input which have this controller.
                type: document.querySelector(DOMString.inputType).value,
                description: document.querySelector(DOMString.inputDescription).value,
                value: document.querySelector(DOMString.inputValue).value,

                //OTHER WAY IS

                //var type = document.querySelector('.add__type').value,
                //var description = document.querySelector('.add__description').value,
                //var value = document.querySelector('.add__value').value,

                //----------------------------------------------------------------/
            }
        },

        //Created the one more methode to access in bth
        getDOMStrings: function() {
            return DOMString;
        }
    }

})();


//GLOBAL APP CONTROLLER

var controller = (function(budgetCtrl, UICtrl) {

    //We have created the init function we plache all the event listner under this function
    var setupEventListeners = function() {
        //Here we recieve the methode from other controler in var.
        var DOM = UICtrl.getDOMStrings();    
        //--------------------------------------------------//

        //Bind the click methode with add button and call a function
        //Here we pass the class name form object which we have created in other controller
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem)

        //Created the event on press ENTER key
        document.addEventListener('keypress', function(event) {
            if(event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        })        
        //--------------------------------------------------//
    }    

    //For reusability we have created the function.
    var ctrlAddItem = function() {

        // 1. Get the filed input data
        const input = UICtrl.getInput();
        console.log(input);

        // 2. Add the item to the budget controller

        // 3. Add the item to the UI 

        // 4. Calculate the budget

        // 5. Display the budget on the UI

    }

    //Access the setupEventListerners we return as object.
    //So that we can access it publiclly.
    return {
        init: function() {
            return setupEventListeners();
        }
    };

})(budegtController, UIController);

//HERE WE CALL THE INIT FUNCTION
controller.init();