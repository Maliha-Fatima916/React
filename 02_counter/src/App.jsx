// A Hook is a special tool of React that allows simple UI's (functional components) smarter
// Imagine a normal function that just returns some UI (JSX).
//What if that UI needs to remember something (like a counter value) or do something when the page updates (like fetch data)?
//A hook is how we add these abilities to functional components

//Key Rules About Hooks
//Hooks always start with "use" (e.g., useState, useEffect).
//Hooks are used inside functional components only.
//React hooks are just functions that give superpowers to components.

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//1. useState() => Lets your component remember data (state).e.g A counter that remembers how many times you clicked a button

function App() {


  let [counter, setCounter] = useState(0)

  const addValue = () => {
    counter = counter + 1
    setCounter(counter)
  }

  const removeValue = () => {
    counter = counter-1
    setCounter(counter)
  }

  return (
    <>
    <h1> React Counter </h1>
    <h2> Counter value : {counter} </h2>
    <button onClick={addValue}> Add  + </button>
    <br />
    <br />
    <button onClick={removeValue}> Remove  - </button>
    </>
  )
}

export default App;
