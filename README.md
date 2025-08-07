# React
## 1. what is JSX ?
JSX stands for JavaScript XML.
It’s a syntax extension for JavaScript that lets you write HTML-like code inside JavaScript.
const element = "<h1> Hello World! </h1> => JSX "
In simple words : JSX is about 90% HTML (with few rules (will discuss later)) in which to inject JS variables / expressions use {}

### Rules of JSX
1. Names of React function components must start with capital letter e.g. App()
2. JSX elements must be wrapped inside a single element that can either be a <div> or React Fragment (<> </>)
3. Use {} (curly braces) to insert JavaScript variables or expressions 
4. Attributes of JSX tags are in Camel Case -> newVariable
5. In JSX' tags attribute class => className , for -> htmlFor
6. Single Tags like <img> , <br> should be self-closing e.g. <img /> , <br />
7. To use a React component inside another component use it as a self-closing containing component's name e.g. App(){ 
    return <Method2 /> }


2. Browsers don’t understand JSX.
React uses a compiler (Babel) to convert JSX into normal JavaScript: 
" const element = "<h1> Hello</h1> "
Babel converts it to:
const element = React.createElement('h1', null, 'Hello');

3. Do we need JSX to use React's functionalities ?
No, JSX is use only to  make React development easier and more readable.React can work without JSX, but writing UI would look like this :  "const element = React.createElement('h1', null, 'Hello React') "
JSX → React.createElement() → JavaScript objects (normal JS) => this is what Babel does

4.What is Virtual DOM ?
DOM is a tree of objects in memory . This is not the actual HTML in the browser—just a virtual representation of it.
The DOM created for JSX code (that we write in App.js) is called Virtual DOM 
In short : Virtual DOM => React builds a tree in memory describing the UI.

✅ How Does It Fit in the Flow?
1: App.js (JSX) => You write UI with JSX here.
2: Babel        => Converts JSX → React.createElement().
3: React.createElement() => Creates Virtual DOM nodes (JavaScript objects).

5. What is createRoot() in index.js ?
createRoot():
> Links React to a real DOM element (which is <div id="root"> in index.html).
> Prepares React to deliver components/UI into that real DOM container
It is actually a connection between real DOM / html.index (which is a display site of our development)
It dispose the Virtual DOM there 
> After createRoot(), When you call root.render(<App />):
React builds a Virtual DOM tree for <App />.
Compares it with previous tree (if any).
Updates the Real DOM efficiently





