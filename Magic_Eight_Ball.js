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

// Math.random() returns a value between 0 (inclusive) and 1 (exclusive).

// In order to make this set of numbers range from 0 (inclusive) to 8 (exclusive) we can multiply the returned value by 8.

// Finally, to ensure we only have whole numbers from 0 to 7 we can round down using Math.floor().

let eightBall = "";
