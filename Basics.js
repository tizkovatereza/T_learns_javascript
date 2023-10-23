
// PRINTING

// Operators can work for strings as well.
// This process of appending one string to another is called concatenation.

console.log('hi' + 'ya'); // Prints 'hiya'
console.log('wo' + 'ah'); // Prints 'woah'
console.log('I love to ' + 'code.')
// Prints 'I love to code.'
console.log('front ' + 'space'); 
// Prints 'front space'
console.log('back' + ' space'); 
// Prints 'back space'
console.log('no' + 'space'); 
// Prints 'nospace'
console.log('middle' + ' ' + 'space'); 
// Prints 'middle space'

console.log("Hello" + "World")


// DATA TYPES

// We work with instances of data types (e.g. "Hello" is an instance of a string data type)
// We can apply different methods or find out different things about different data types
// Example: "Hello".length gives us length of a word "Hello"


// METHODS

// Example: console.log() is using log method on console object
// Use .toUpperCase() to log 'Codecademy' in all uppercase letters
console.log('Codecademy');

// Use a string method to log the following string without whitespace at the beginning and end of it.
console.log('    Remove whitespace   '.trim());

console.log("Codecademy".toUpperCase()) // Be careful about the capital letters !!!


// BUILT-IN OBJECTS

console.log(Math.random());
// Prints a random number between 0 and 1

Math.random()*50;

//You can use Math.floor() to round down a random number like this:
Math.floor(Math.random()*50);

console.log(Math.floor(Math.random()*50));
// Math.floor() takes a decimal number, and rounds down to the nearest whole number
// In this case:
// Math.random() generates a random number between 0 and 1.
// We then multiply that number by 50, so now we have a number between 0 and 50.
// Then, Math.floor() rounds the number down to the nearest whole number.

console.log(Math.ceil(43.8));   // Returns the smallest integer greater than or equal to a decimal number
console.log(Number.isInteger(2017)); 


// Let’s take one more glance at the concepts we just learned:

// Data is printed, or logged, to the console, a panel that displays messages, with console.log().
// We can write single-line comments with // and multi-line comments between /* and */.
// There are 7 fundamental data types in JavaScript: strings, numbers, booleans, null, undefined, symbol, and object.
// Numbers are any number without quotes: 23.8879
// Strings are characters wrapped in single or double quotes: 'Sample String'
// The built-in arithmetic operators include +, -, *, /, and %.
// Objects, including instances of data types, can have properties, stored information. The properties are denoted with a . after the name of the object, for example: 'Hello'.length.
// Objects, including instances of data types, can have methods which perform actions. Methods are called by appending the object or instance with a period, the method name, and parentheses. For example: 'hello'.toUpperCase().
// We can access properties and methods by using the ., dot operator.
// Built-in objects, including Math, are collections of methods and properties that JavaScript provides.


// VARIABLES
var myName = "Unicorn";
console.log(myName);
// Capitalizing is called camel casing
// Variable names cannot start with numbers.
// Variable names are case sensitive, so myName and myname would be different variables. It is bad practice to create two variables that have the same name using different cases.
// Variable names cannot be the same as keywords. For a comprehensive list of keywords check out MDN’s keyword documentation.

// As mentioned in the previous exercise, the let keyword was introduced in ES6. The let keyword signals that the variable can be reassigned a different value.
let myNameIs = "Tereza";
// Then changing the value, e.g.
myNameIs = "Slim Shady";

// Constant variable - opposite to let, indicates that we cannot change it, it returns an error
const entree = 'Enchiladas';
console.log(entree);

entree = 'Tacoss';
console.log(entree); // Returns error


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// WEATHER PREDICTION WEBSITE PROGRAM


// Set variables - kelvin is constant variable
const kelvin = 0;
console.log(kelvin);

// Set constant variable for tranforming Kelvin to Celsius
const difference = 273;
console.log(difference);

let celsius = kelvin - difference;
console.log(celsius);


let fahrenheit = celsius * (9 / 5) + 32;
console.log(fahrenheit);

// Rounding fown the Fahrenheit temperature
fahrenheit = Math.floor(fahrenheit);
console.log(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);


// Multiple each value with that constant


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DOG YEARS

// Defining variables
let myAge = 26;
let earlyYears = 2;


console.log(myAge);
console.log(earlyYears);


// Use the multiplication assignment operator to multiply the value saved to earlyYears by 10.5 and reassign it to earlyYears.
earlyYears *= 10.5;
console.log(earlyYears);

let laterYears = myAge - 2;
console.log(laterYears);


laterYears *= 4;
console.log(laterYears);

// Add earlyYears and laterYears together, and store that in a variable named myAgeInDogYears.
// Write a comment that explains this line of code.

let myAgeInDogYears = earlyYears + laterYears;
console.log(myAgeInDogYears);

let myName = 'Tereza'.toLowerCase();


console.log(`My name is ${myName}. I am ${myAgeInDogYears} years old in dog years.`);




// CONDITIONS

let sale = true;

sale = false;

if(sale) {
  console.log('Time to buy!');
} else {
   console.log('Time to wait for a sale.');
}



////////////////////////////////////////////////////////////////////////
// Comparison Operators
// When writing conditional statements, sometimes we need to use different types of operators to compare values. These operators are called comparison operators.

// Here is a list of some handy comparison operators and their syntax:

// Less than: <
// Greater than: >
// Less than or equal to: <=
// Greater than or equal to: >=
// Is equal to: ===
// Is not equal to: !==
// Comparison operators compare the value on the left with the value on the right. For instance:

10 < 12 // Evaluates to true;

'apples' === 'oranges' // false;

let hungerLevel = 7;

if (hungerLevel>7) {
  console.log('Time to eat!');
} else {
  console.log('We can eat later!');
}


// Truthy and Falsy Assignment
// Truthy and falsy evaluations open a world of short-hand possibilities!

// Say you have a website and want to take a user’s username to make a personalized greeting. Sometimes, the user does not have an account, making the username variable falsy. The code below checks if username is defined and assigns a default string if it is not:

let username = '';
let defaultName;

if (username) {
  defaultName = username;
} else {
  defaultName = 'Stranger';
}

console.log(defaultName); // Prints: Stranger

// If you combine your knowledge of logical operators you can use a short-hand for the code above. In a boolean condition, JavaScript assigns the truthy value to a variable if you use the || operator in your assignment:

let username = '';
let defaultName = username || 'Stranger';

console.log(defaultName); // Prints: Stranger

// Because || or statements check the left-hand condition first, the variable defaultName will be assigned the actual value of username if it is truthy, and it will be assigned the value of 'Stranger' if username is falsy. This concept is also referred to as short-circuit evaluation.

//
let isLocked = false;

isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');

let isCorrect = true;

isCorrect ? console.log('Correct!') : console.log('Incorrect!');

let favoritePhrase = 'Love That!';

favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!");



////////////////////////////////////////////////////////////////////////////////////////
// THE SWITCH KEYBOARD

let athleteFinalPosition = 'first place';

switch(athleteFinalPosition){
  case 'first place':
    console.log('You get the gold medal!');
    break;
  case 'second place':
    console.log('You get the silver medal!');
    break;
  case 'third place':
    console.log('You get the bronze medal!');
    break;
  default:
    console.log('No medal awarded.');
    break;
}

////////////////////////////////////////////////////////////////////////////////////////
// FUNCTIONS

// DEFAULT PARAMETER
function makeShoppingList(item1, item2, item3){
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}


function greeting (name = 'stranger') {
  console.log(`Hello, ${name}!`)
}

greeting('Nick') // Output: Hello, Nick!
greeting() // Output: Hello, stranger!



////////////////////////////////////////////////////////////////////////////////////////
// FUNCTION RETURN


function rectangleArea(width, height) {
  let area = width * height;
  return area;
}
console.log(rectangleArea(5, 7)) // Prints undefined


function rectangleArea(width, height) {
  if (width < 0 || height < 0) {
    return 'You need positive integers to calculate area!';
  }
  return width * height;
}

function monitorCount(rows, columns) {
  return rows * columns;
}

const numOfMonitors = monitorCount(5,4);
console.log(numOfMonitors);

////////////////////////////////////////////////////////////////////////////////////////
// HELPER FUNCTIONS

// We can also use the return value of a function inside another function. These functions being called within another function are often referred to as helper functions. Since each function is carrying out a specific task, it makes our code easier to read and debug if necessary.

// If we wanted to define a function that converts the temperature from Celsius to Fahrenheit, we could write two functions like:

function monitorCount(rows, columns) {
  return rows * columns;
}


function multiplyByNineFifths(number) {
  return number * (9/5);
};

function getFahrenheit(celsius) {
  return multiplyByNineFifths(celsius) + 32;
};

getFahrenheit(15); // Returns 59

////////////////////////////////////////////////////////////////////////////////////////

function monitorCount() {
};

function costOfMonitors(rows,columns) {
  return monitorCount(rows,columns) * 200;
};


const totalCost = costOfMonitors(5,4);

console.log(totalCost);

////////////////////////////////////////////////////////////////////////////////////////
// Function expressions

// Another way to define a function is to use a function expression.
// To define a function inside an expression, we can use the function keyword.

// To declare a function expression:

// Declare a variable to make the variable’s name be the name, or identifier, of your function.
// Since the release of ES6, it is common practice to use const as the keyword to declare the variable.

// Assign as that variable’s value an anonymous function created by using the function keyword followed by a set of parentheses with possible parameters.
// Then a set of curly braces that contain the function body.

const plantNeedsWater = function(day){
  if (day === "Wednesday"){
        return true;
  } else {
    return false;
  }
};


plantNeedsWater("Tuesday")
console.log(plantNeedsWater("Tuesday"));


////////////////////////////////////////////////////////////////////////
// Arrow functions

// ES6 introduced arrow function syntax, a shorter way to write functions by using the special “fat arrow” () => notation.

const plantNeedsWater = (day) => {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};












