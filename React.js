////////////////////////////////////////////////////////////////////////////////////////////////////////////
// INTRO

// Take a look at the following line of code:

const h1 = <h1> Hello world </h1>;

// However, the code also contains <h1>Hello world</h1>, which looks exactly like HTML. That part wouldn’t work if you tried to run it in a JavaScript file.
// Despite what it looks like, your code doesn’t actually contain any HTML at all.

// The part that looks like HTML, <h1>Hello world</h1>, is something called JSX.


////////////////////////////////////////////////////////////////////////////////////////////////////////////
// JSX

// JSX is a syntax extension for JavaScript. It was written to be used with React. JSX code looks a lot like HTML.
// The “syntax extension” means that JSX is not valid JavaScript. Web browsers can’t read it!

// If a JavaScript file contains JSX code, then that file will have to be compiled.
// This means that before the file reaches a web browser, a JSX compiler will translate any JSX into regular JavaScript.

