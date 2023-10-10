
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
















