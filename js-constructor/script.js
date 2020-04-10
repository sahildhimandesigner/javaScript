
document.getElementById('carInfo').addEventListener('submit', formDetails);

function Mobile(modNumber, name) {
    //THIS REFERING THE NEW CREATED OBJECT INSTANCE 
    //YOU CAN MENTIONED HERE SAMSUNG OR NOKIA BUT, YOU HAVE TO CHANGE EVERYTIME
    //NOW THIS IS WORKING DYNAMICALLY
    this.model = modNumber,
    this.modelName = name,
    this.carInfo = function() {
        document.write(this.model + '' + this.modelName );
    }
    alert('mobile constructor')
}

function formDetails(e){
    e.preventDefault()
    car = document.getElementById('carName').value;
    model = document.getElementById('carModel').value;
    color = document.getElementById('carColor').value;

    console.log(car, model, color)
    newCarDetail()
}

//CREATED THE OBJECT INSTANCE BY USING MOBILE CONSTRUCTOR

function newCarDetail() {
    var car = new Mobile(model, color, car);
    
    car.carInfo();
    alert('newCarDetails')
}


// function Mobile(modNumber, name) {
//     //THIS REFERING THE NEW CREATED OBJECT INSTANCE 
//     //YOU CAN MENTIONED HERE SAMSUNG OR NOKIA BUT, YOU HAVE TO CHANGE EVERYTIME
//     //NOW THIS IS WORKING DYNAMICALLY
//     this.model = modNumber,
//     this.modelName = name,
//     this.price = function() {
//         document.write(this.model + 'Price Rs. 300' + this.modelName);
//     }
// }

// //CREATED THE OBJECT INSTANCE BY USING MOBILE CONSTRUCTOR
// var samsung = new Mobile('6000', 'glaxy');
// var nokia = new Mobile('3310', 'engage')
// console.log(samsung.model, nokia.model)

// samsung.price();
// nokia.price();