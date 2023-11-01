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


////////////////////////////////////////////////////////////////////////////////////////////////////////////
// JSX ELEMENTS

// A basic unit of JSX is called a JSX element.
// Examples:
<h1> Hello world</h1>
<p> Hello world </p>

// JSX elements are treated as JavaScript expressions.
// They can go anywhere that JavaScript expressions can go.
// This means that a JSX element can be saved in a variable, passed to a function, stored in an object or array… 

// Examples:
const navBar = <nav> I am a nav bar </nav>;

const myTeam = {
  center: <li>Benzo Walli</li>,
  powerForward: <li>Rasha Loa</li>,
  smallForward: <li>Tayshaun Dasmoto</li>,
  shootingGuard: <li>Colmar Cumberbatch</li>,
  pointGuard: <li>Femi Billon</li>
};

const myArticle = <article> </article>;
