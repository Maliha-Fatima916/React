# React
A code repository 

what is JSX ?

JSX stands for JavaScript XML.
It’s a syntax extension for JavaScript that lets you write HTML-like code inside JavaScript.
const element = <h1> Hello World! </h1> => JSX

Browsers don’t understand JSX.
React uses a compiler (Babel) to convert JSX into normal JavaScript: 
const element = <h1>Hello</h1>;
// Babel converts it to:
const element = React.createElement('h1', null, 'Hello');

3. Do we need JSX to use React's functionalities ?
No, JSX is use only to  make React development easier and more readable.React can work without JSX, but writing UI would look like this :  const element = React.createElement('h1', null, 'Hello React');




