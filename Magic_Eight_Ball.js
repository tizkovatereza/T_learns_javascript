// Magic Eight Ball

// You’ve learned a powerful tool in JavaScript: control flow! It’s so powerful, in fact, that it can be used to tell someone’s fortune.

// In this project we will build a Magic Eight Ball using control flow in JavaScript.

// The user will be able to input a question, then our program will output a random fortune.

// If you get stuck during this project or would like to see an experienced developer work through it, click “Get Unstuck“ to see a project walkthrough video.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// In the first line of the program, define a variable called userName that is set to an empty string.

// If the user wants, they can enter their name in between the quotation marks.

let userName = '';

userName ? console.log(`Hello ${userName}!`)
: console.log("Hello");

const userQuestion = "What do you want to ask the Magic Eight Ball?";
console.log(`Hello ${userName}, ${userQuestion}`);


let randomNumber = Math.floor(Math.random() * 8);
console.log(randomNumber);

// Math.random() returns a value between 0 (inclusive) and 1 (exclusive).

// In order to make this set of numbers range from 0 (inclusive) to 8 (exclusive) we can multiply the returned value by 8.

// Finally, to ensure we only have whole numbers from 0 to 7 we can round down using Math.floor().

let eightBall = "";

switch (randomNumber) {
  case 0:
    // Statements executed when expression = value1
    break;
  case 1:
    console.log('It is certain');
    break;
  case 2:
    console.log('It is certain');
    break;
   case 3:
    console.log('It is decidedly so');
    break;
   case 4:
    console.log('Reply hazy try again');
    break;
   case 5:
    console.log('Cannot predict now');
    break;
   case 6:
    console.log('Do not count on it');
    break;
   case 7:
    console.log('My sources say no');
    break;
   case 8:
    console.log('Outlook not so good');
    break;
   case 2:
    console.log('Signs point to yes');
    break;
   case 2:
    console.log('It is certain');
    break;
  default:
  console.log('I am tired, whatever');
}







