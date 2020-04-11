
//We have created the on class. 
//This is parent class.
//We have creted the on methode inside parents class 'showFMoney'.

//This is parenst class.
class Parents {
    showFMoney(){
        return "Father Money <br />";
    }
}

//Now i have created one more class this is child class 'SON'
//This is child, sub, or inherit class.
//We want to access the parents class methode for that we inherit it in son class by extands.

//This is single inheritence.
//This is child class.
class Son extends Parents {
    showSMoney() {
        return "Son Money <br />"
    }
}

//This is mulitple inheritence.
//This is sub child class.
//This subchild has a all methode or parent and grand parent class.
class GrandSon extends Son {
    showGmoney(){
        return 'Grand Son Money <br /><br /><br />'
    }
}

//Create a one object
//We can access the methode of both class in grandclass 
//We can aslo so create new methode in grandSon class.

var money = new GrandSon();

document.write(money.showFMoney())
document.write(money.showSMoney())
document.write(money.showGmoney())

//**********************************************
//*************ProtoType Inheritence************
//**********************************************


//Whenever we create a constructor. It will create two object.
//Function and prototype object.
//So function have one property. which we call prototype.
//We can access the Mobile function by prototype property.
//Function have one prototype. which point to prototype object.
//AND Prototype again have one proto which point null.


function Mobile() {
    this.a = 10;
}

//we have created the object of Mobile constructor.
//when we give a new object with new keyword to JS engine.
//Then JS engine create the object and define one property which point to class prototype object. 
//This is also called a prototype chain.
var m = new Mobile();



//HERE WE HAVE CREATED THE PROTOTYPE IN MOBILE CONSTRUCTOR.
Mobile.prototype.c = 30;

document.write(m.c)

//BUT WE ARE NOT ABLE TO ACCESS THE C VALUE IN SAMSUNG CONSTRUCTOR
//FOR THAT WE DO THE PROTOTYPE INHERITANCE
function Sumsung(number){
    //this will call our parent constructor and his properties.
    Mobile.call(this);
    this.b = number;
}

//THIS WAY WE DO THE PROTOTYPE INHERITANCHE
Sumsung.prototype = Object.create(Mobile.prototype);

//RESET THE CONSTRUCTOR //THIS IS GOOD PRACTICE TO RESET THE CONSTRUCTOR
Sumsung.prototype.constructor = Sumsung;

var s = new Sumsung(40);
document.write(s.a + '<br />');
document.write(s.b + '<br />');
document.write(s.c + '<br />')

//HERE WE ARE NOT DOING CLASS OR CONSTRUCTOR INHERITANCE
//WE ARE DOING HERE PROTOTYPES INHERITANCE