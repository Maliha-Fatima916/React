import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <App /> // React component
)

//...................................................................................................

// .render() buil-in function can take in React-component(as just above) or React-element (created using createElement() built-in) as parameters 
// Lets try passing react Element (remember .render() do not take custom react element , to render that use customRender())


// First Vite React element
// Syntax for creating react element using built-in createElement() func of React library
// React.createElement(type of DOM element as str , its attributes as obj => inside {} , inner content , variables(if any))

//.............COMMENT THE ABOVE CODE FROM LINE 6 TO 8 THEN UNCOMMENT THE BELOW ONE 22 TO END................

// const num = 44

// const viteReactEle = React.createElement(
//   'a' ,
//   {href:'https://google.com' , target:'_blank'},
//   'Click me to visit Google',
//   num



// );

// createRoot(document.getElementById('root')).render(
//   viteReactEle 
// );