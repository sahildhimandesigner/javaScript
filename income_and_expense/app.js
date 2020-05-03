//BUDGET CONTROLLER
var budegtController = (function(){
    
    //Some code

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