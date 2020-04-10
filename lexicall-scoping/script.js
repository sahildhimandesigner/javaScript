//*******************FIRST EXAMPLE*************************/
//'this' inside a global scope

this.table = 'window table';
console.log(window.table, 'gloabal scope')
//this hare has a global scope or window scope

//*******************SECOND EXAMPLE*****************************/
//how we can access in object
this.garage = {
    table: 'garage table'
}

this.garage.table;
console.log(this.garage.table, 'this.garag.table') 
//OR both are the same things. but this is public property of window
//Becuase you are using this.garage and this is bydefault global
//And it can be accessible from outside
window.garage.table; 
console.log(window.garage.table, 'widonw.garage.table')

//********************THIRD EXAMPLE*************************/


// 'this' inside an object
// so we are not starting with this.
// and we can not access like: this.johnRoom.table because it is private var.
let johnsRoom = {
    table: 'Sahil table',
    cleanTable(){
        console.log('clean the room', this.table);
    }
}
this.johnsRoom.cleanTable();
console.log(johnsRoom.table, 'sahil table')

/*************************************************************/


//*******************FOURTH EXAMPLE***************************/

//'this' inside the method
//When we use function under the object then we call it method.
//But under the method if we call function then it is regular function.
let johnRoom = {
    table: 'John Table',
    cleanTable(){
        console.log('clean the room', this.table);
    }
}

johnRoom.cleanTable();
//***********************************************************/

//********************FIFTH EXAMPLE**************************/

// 'this' inside a function


//**********************************************************/
// var a = 'hello';
// var b = 'ajay';
// third();

// function first(c) {
//     var b = c;
//     console.log(b, 'b')
//     second();
   
    
//     function second() {
//         var c = 'hey!';
//         console.log(b + c)
//     }
// }

// function third() {
//     first('sahil hai');
//     var d = 'sahil';
//     console.log(d + b)
// }

// var john =  {
//     name: 'john',
//     yearOfBirth:'1990',
//     calculateAge: function() {
//         console.log(this)
//         console.log(2016 - this.yearOfBirth);
//     }
// }

// john.calculateAge();


// this section about he this keyword
// const video = {
//     title: 'a',
//     play(){
//         console.log(this);
//     },
//     tags: ['a', 'b', 'c'],
//     showTag(){
//         this.tags.forEach(function(tag){
//             console.log(this.title, tag)
//         }, this)
//     }
// };
// console.log(video)

// function Video(name){
//     this.name = name;
//     console.log(this);
// }


// const v = new Video('b')

// this.table = 'window table';
// console.log(window.table)

// video.showTag(); 


// video.stop = function(){
//     console.log(this);
// }
// video.stop();
// var a;

// add()

// function add(b) {
//     a = 10; // we can acces the a value becuse it is define globaly
//     console.log(a)
//     return (a + b);
// }




// function add(b) {
//     a = 10;
//     return (a + b);
//     console.log(a) // console.log will not work after return
// }

// console.log(a + "" + b);

// a = 'Cran'; //Initialize a
// b = 'berry';
// var a, b;