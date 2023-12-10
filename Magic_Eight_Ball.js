// Magic Eight Ball

/*
You’ve learned a powerful tool in JavaScript: control flow! It’s so powerful, in fact, that it can be used to tell someone’s fortune.

In this project we will build a Magic Eight Ball using control flow in JavaScript.

The user will be able to input a question, then our program will output a random fortune.

If you get stuck during this project or would like to see an experienced developer work through it, click “Get Unstuck“ to see a project walkthrough video.
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Define a variable 'userName' where the user can enter their name
let userName = '';

// Greet the user based on whether they've entered a name or not
userName ? console.log(`Hello ${userName}!`) : console.log("Hello");

// Define a string variable 'userQuestion' with the question to ask the Magic Eight Ball
const userQuestion = "What do you want to ask the Magic Eight Ball?";
// Log the user's name and their question
c
console.log(`Hello ${userName}, ${userQuestion}`);


// Generate a random number between 0 and 7
let randomNumber = Math.floor(Math.random() * 8);
console.log(randomNumber);
/*
Math.random() returns a value between 0 (inclusive) and 1 (exclusive).

In order to make this set of numbers range from 0 (inclusive) to 8 (exclusive) we can multiply the returned value by 8.

Finally, to ensure we only have whole numbers from 0 to 7 we can round down using Math.floor().
*/

// Declare a variable 'eightBall' to store the fortune
let eightBall = "";

// Use a switch statement to set 'eightBall' to a fortune based on 'randomNumber'
switch (randomNumber) {
  case 0:
    // There is no statement associated with 0, no action will be taken
    break;
  case 1:
  case 2:
    eightBall = 'It is certain';
    break;
   case 3:
    eightBall = 'It is decidedly so';
    break;
   case 4:
    eightBall = 'Reply hazy try again';
    break;
   case 5:
    eightBall = 'Cannot predict now';
    break;
   case 6:
    eightBall = 'Do not count on it';
    break;
   case 7:
    eightBall = 'My sources say no';
    break;
   case 8:
    // Case 8 is not possible with the current random number range (0-7)
    break;
  default:
    eightBall = 'Signs point to yes';
}

// Log the fortune
console.log(eightBall);

/*
Note: There's no case for 'randomNumber == 8', as the random number is between 0 and 7. The default case handles any number not explicitly matched; in this case, though, it won't be executed due to current randomNumber range.
*/
