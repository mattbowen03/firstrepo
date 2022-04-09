//Not sure how to pair js with html yet, but here's my plan:

//i'll have a text input for them to put in their name
let userName = 'Matt';

//after they submit their name, a message will appear. obv replace console log with that function
userName ? console.log(`Hello, ${userName}!`): console.log('Hello!');

//another input field will have them type their question
const userQuestion = 'Will it rain today?';

//another message will restate their question
console.log(`${userName} has asked: ${userQuestion}`);

//this selects a random number between 0 and 7
let randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

switch (randomNumber) {
    case 0:
        eightBall = 'Some things you just have to find out yourself';
        break;
    case 1:
        eightBall = 'Maybe. Or then again, maybe not';
        break;
    case 2:
        eightBall = 'Wouldn\'t you like to know';
        break;
    case 3:
        eightBall = 'If you have a litte faith anything is possible';
        break;
    case 4:
        eightBall = 'There is no saying it won\'t';
        break;
    case 5:
        eightBall = 'Crazier things have happened';
        break;
    case 6:
        eightBall = 'If you want it to, it could happen';
        break;
    case 7:
        eightBall = 'Ask a human. I\'m just a machine programmed to answer randomly';
        break;
}

console.log(`The magic eightBall says, "${eightBall}!"`);