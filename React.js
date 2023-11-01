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

////////////////////////////////////////////////////////////////////////////////////////////////////////////
// JSX ATTRIBUTES

// JSX elements can have attributes, just like how HTML elements can.
// A JSX attribute is written using HTML-like syntax: a name, followed by an equals sign, followed by a value.

//The value should be wrapped in quotes, like this:
tereza-attribute-name = "some-name"

// Here are some JSX elements with attributes:

<a href='http://www.example.com'>Welcome to the Web</a>;
const title = <h1 id='title'>Introduction to React.js: Part I</h1>; 

// A single JSX element can have many attributes, just like in HTML:
const panda = <img src='images/panda.jpg' alt='panda' width='500px' height='500px'>;

// Examples:
const p1 = <p id='large'> foo </p>;
const p2 = <p id='small'> bar </p>;

// There are no quotation marks for the expression in the elements

////////////////////////////////////////////////////////////////////////////////////////////////////////////
// NESTED JSX

<a href="https://www.example.com"><h1>Click me!</h1></a>

// Nicer format:
<a href="https://www.example.com">
  <h1>
    Click me!
  </h1>
</a>


// If we want multi-line -> use parentheses
(
  <a href="https://www.example.com">
    <h1>
      Click me!
    </h1>
  </a>
)

const myDiv = (<div> <h1> Hello world </h1> </div>);

////////////////////////////////////////////////////////////////////////////////////////////////////////////
// JSX OUTER ELEMENTS

// There’s a rule that we haven’t mentioned: a JSX expression must have exactly one outermost element.

// This code will work:

const paragraphs = (
  <div id="i-am-the-outermost-element">
    <p>I am a paragraph.</p>
    <p>I, too, am a paragraph.</p>
  </div>
);

// This code will not work:

const paragraphs = (
  <p>I am a paragraph.</p> 
  <p>I, too, am a paragraph.</p>
);


// Div element - solution for wrapping your JSX expression if it contains multiple outer elements. 
const blog = (
  <div>
  <img src="pics/192940u73.jpg" />
  <h1>
    Welcome to Dan's Blog!
  </h1>
  <article>
    Wow I had the tastiest sandwich today. I <strong>literally</strong> almost freaked out.
  </article>
  </div>
);

////////////////////////////////////////////////////////////////////////////////////////////////////////////
// RENDERING JSX

// To render a JSX expression means to make it appear on screen.
// Code for rendering:

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<h1>Hello world</h1>);

// Together with code:
import React from 'react';
import { createRoot } from 'react-dom/client';

// Copy code here:
const container = document.getElementById('app');
const root = createRoot(container);
root.render(<h1>Hello world</h1>);

// Explaining the JSX rendering:
// React relies on two things to render: what content to render and where to place the content.

// This code:
const container = document.getElementById('app')
// Uses the document object which represents our web page.
// Uses the getElementById() method of document to get the Element object representing the HTML element with the passed in id (app).
// Stores the element in container.

const root = createRoot(container)
// We use createRoot() from the react-dom/client library, which creates a React root from container and stores it in root.
// root can be used to render a JSX expression.
// This is the “where to place the content” part of React rendering.


////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PASSING A VARIABLE TO render()


import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);
// Write code here:
const myList = (
  <ul>
  <li> Heyy </li>
  <li> What's up'</li>
  <li> It's me'</li>
  </ul>
);

root.render(myList);


////////////////////////////////////////////////////////////////////////////////////////////////////////////
// THE VIRTUAL DOM

// Solves the slow DOM 
// Prevents wasteful DOM manipulation
// In React, for every DOM object, there is a corresponding “virtual DOM object.”


////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SELF-CLOSING TAGS

// Some HTML elements such as <img> and <input> use only one tag. 
// In HTML, it is optional to include a forward slash immediately before the final angle bracket. But not in JSX.

// Fine in JSX:
<br />

// NOT FINE AT ALL in JSX:
<br>

// Example:
  const profile = (
  <div>
    <h1>John Smith</h1>
    <img src="images/john.png"/>
    <article>
      My name is John Smith.
      <br/>
      I am a software developer.
      <br/>
      I specialize in creating React applications.
    </article>
  </div>
);

////////////////////////////////////////////////////////////////////////////////////////////////////////////
// JAVASCRIPT IN JSX IN JAVASCRIPT

import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);
// Write code here:
root.render(<h1>2 + 3</h1>);










