
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
            var newItem, ID;

            //Create a new id
            //So if there is no idea that it should be zero. and zero -1 is -1
            //so there is not -1 in array and this id is not existe            

            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }

            // Create new item based on 'inc' or 'exp' type
            if (type === 'exp') {
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, des, val);
            }

            //Here we store our iteam in data
            //We are pushing our data into DATA object bassed on type here
            data.allItems[type].push(newItem);            

            //now we are going to return newItem so that other controller can use it.
            //Return the new element
            return newItem;
        },

        deleteItem: function(type, id) {
            var ids, index;

            ids = data.allItems[type].map(function(current){
                return current.id;
            })

            index = ids.indexOf(id);
            
            if(index !== -1) {
                data.allItems[type].splice(index, 1);
                //index - index number of array
                //1 - second parameter, how many item, we want to delete
            }
        },

        testing: function(){
            console.log(data)
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

    const DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list',
        container: '.container'
    }

    return {
        //Here we have created the methode and return a object becuse we can access it publically.
        getInput: function() {
            return {

                //So rather than defining multple var we create a object.
                //this methode return all these three input which have this controller.
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value,

                //OTHER WAY IS

                //var type = document.querySelector('.add__type').value,
                //var description = document.querySelector('.add__description').value,
                //var value = document.querySelector('.add__value').value,

                //----------------------------------------------------------------/
            }
        },

        addListItem: function(obj, type) {
            var html, newHtml, element;
            // Create HTML string with placeholder text
            
            if (type === 'inc') {
                element = DOMstrings.incomeContainer;
                
                html = '<div class="item clearfix" id="inc-%id%"> <div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            } else if (type === 'exp') {
                element = DOMstrings.expensesContainer;
                
                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }
            
            // Replace the placeholder text with some actual data
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);
            
            // Insert the HTML into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        },

        //Created the one more methode to access in bth
        getDOMStrings: function() {
            return DOMstrings;
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

        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);
    }    

    //For reusability we have created the function.
    var ctrlAddItem = function() {
        var input, newItem,

        // 1. Get the filed input data
        input = UICtrl.getInput();

        // 2. Add the item to the budget controller
        newItem = budegtController.addItem(input.type, input.description, input.value)

        // 3. Add the item to the UI 
        UICtrl.addListItem(newItem, input.type);

        // 4. Calculate the budget

        // 5. Display the budget on the UI

    }

    var ctrlDeleteItem = function(event) {
        var itemId, splitId;
        itemId = event.target.parentNode.parentNode.parentNode.parentNode.id
        

        //inc - 1
        if(itemId) {
            splitId = itemId.split('-')
            type = splitId[0];
            //parseInt is used to convert the string to number
            ID = parseInt(splitId[1]);
        }

        // 1. Delete the item from data structure
        budgetCtrl.deleteItem(type, ID);

        // 2. Delete the item from the UI

        // 3. Update and show new budget
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