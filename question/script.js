//STEP: 1 
//Created the one Function Constructor. called it Question.
//Pass three parameter Question, answers, correct answers.
function Question(question, answers, correct){
    this.question = question;
    this.answers = answers;
    this.correct = correct;
}

//STEP: 6
//We use methode to show the random question.
//We use prototype here to attache this methode with all question.
//Becuse we don't want to write this methode in Question function constructor.

Question.prototype.displayQuestion = function() {
    //First display the question.   
    //When we call q1, q2 it will call.
    console.log(this.question)

    //Now we need to display the answerss. there are multiple answers.
    //We don't know, how many of them are in future.
    //We use for loop for that. We will loop through all the answers and display all of them.

    for(var i = 0; i < this.answers.length; i++) {
        //We have to show the answer with number
        console.log(`${i} : ${this.answers[i]}`);
    }
}   

//STEP: 2
//Created the three question with object which will load in console randomly
const question1 = new Question('what is reactjs?', ['framewrok', 'library'], 1);
const question2 = new Question('Full form of html?', ['hypertext markup language', 'hypertext library'], 0);
const question3 = new Question('What is V8?', ['JS Library', 'JS function', 'JS Engine'], 2);

//STEP: 3
//Store all question in array.
const questions = [question1, question2, question3];

//STEP: 4
//To generate the random question we use Math function.
//floor use to remove the decimal value.
//we multiply with total question number.
let number =  Math.floor(Math.random() * questions.length);

//STEP: 5
questions[number].displayQuestion();


