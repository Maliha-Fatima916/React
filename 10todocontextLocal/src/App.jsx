import { useState, useEffect } from 'react'
import {TodoProvider} from './contexts/TodoContext'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

// step1 : define your UI => CSS etc inside return wrapped inside <provider tag>
//step2: do not forget to add 'value' inside provider tag value={{names of all vars or mehods define in context}}
// step2: write functionality of methods that were initialize in Context + code to update value of default variables if required
function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => { // add a new to-do having name todoTitle
    // setTodos(todoTitle) // passing a new to-do to setTodos will add a new todo but this method of passing new to-do will overwrite the previous one 
    // so we will pass new to-do in a way that it do not disturb the previous ones 
    //setTodos( (prev) => [...prev, todoTitle])
    // we have preserved the previous to-do pattiz but now instead of passing the todoTitle
    // we should pass an object ( bcz each to-do patti is an object ) so we have to manualy pass the new object

    setTodos( (prev) => [...prev, {id: Date.now(), ...todo}]) // this what we have spread is coming from add() of TodoForm.jsx
    // todoTitle is an object also ??? it take all key-value pairs
    //  of this todoTitle obj and spread them in new object (curly braces jis k andar ...todotitle rkha ha )
    // with id:Date.now()
    
  }

  const updatedTodo = (id, todo) => {
    setTodos( (prev) =>
      prev.map( (eachTodo) => {
        if (eachTodo.id === id) {
          todo
        }else{
          eachTodo // current to-do patti
        } } )
      )
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((eachTodo) => eachTodo.id !== id )) 
  }

  const toggleComplete = () => {
    setTodos((prev) => prev.map((currentTodo) => currentTodo.id === id ? {...currentTodo, complete: !currentTodo.complete } : currentTodo))

  }

  // local Storage : Browser prvides a little storage to store little peices of information. that remains even after you close the tab or restart your computer.
  // You save data as key–value pairs (both must be strings).
  // You can store, retrieve, or remove items.
  // Storing Data: localStorage.setItem("username", "Maliha")
  // Retriieving Data: localStorage.removeItem("username")
  // Clear everything: localStorage.clear()

//Using useEffect to retrieve stored todos and to store currently present to-dos in local storage so that reloading 
// the page do not results in vanishing the already present to-dos

// retrieving from local storage 
  useEffect( () => {
    const todos = JSON.parse(localStorage.getItem("todos"))  // localstorage.getItemwill return a string but we want an obj. / JSON so we use JSON.parse
    if (todos && todos.length > 0){ setTodos(todos) }
  }, [])

// storing in local storage 
  useEffect( () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])



  
  



  return (
    <TodoProvider value={{todos, addTodo, updatedTodo,deleteTodo,toggleComplete}}>
     <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
            <div className="mb-4">
                {/* Todo form goes here */} 
                <TodoForm /> 
            </div>
            <div className="flex flex-wrap gap-y-3">
                {/*Loop and Add TodoItem here */}
                {todos.map((todo) => (
                  <div key={todo.id} className = 'w-full'> <TodoItem todo = {todo}/> </div>
                ) )}
            </div>
        </div>
      </div>

    </TodoProvider>
  )
}

export default App
