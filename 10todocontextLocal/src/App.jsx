import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ToDoProvider } from './contexts/ToDoContext'

// step1 : define your UI => CSS etc inside return wrapped inside <provider tag>
//step2: do not forget to add 'value' inside provider tag value={{names of all vars or mehods define in context}}
// step2: write functionality of methods that were initialize in Context + code to update value of default variables if required
function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todoTitle) => { // add a new to-do having name todoTitle
    // setTodos(todoTitle) // passing a new to-do to setTodos will add a new todo but this method of passing new to-do will overwrite the previous one 
    // so we will pass new to-do in a way that it do not disturb the previous ones 
    //setTodos( (prev) => [...prev, todoTitle])
    // we have preserved the previous to-do pattiz but now instead of passing the todoTitle
    // we should pass an object ( bcz each to-do patti is an object ) so we have to manualy pass the new object

    setTodos( (prev) => [...prev, {id: Date.now(), ...todoTitle}])
    // todoTitle is an object also ??? it take all key-value pairs
    //  of this todoTitle obj and spread them in new object (curly braces jis k andar ...todotitle rkha ha )
    // with id:Date.now()
    
  }

  const updatedTodo = (id, todoTitle) => {
    setTodos( (prev) =>
      prev.map( (eachTodo) => {
        if (eachTodo.id === id) {
          todoTitle
        }else{
          eachTodo // current to-do patti
        } } )
      )
  }

  const deleteTodo(id){
    setTodos((prev) => prev.filter((eachTodo) => eachToDo.id !== id ))
  }

  const toggleComplete() => {
    setTodos( (prev) => prev.map((currentTodo) => currentTodo.id === id {...currentTodo, complete: !currentTodo.complete } ? currentTodo))

  }


  
  



  return (
    <ToDoProvider value={{todos,addTodo,updatedTodo,deleteTodo,toggleComplete}}>
     <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
            <div className="mb-4">
                {/* Todo form goes here */} 
            </div>
            <div className="flex flex-wrap gap-y-3">
                {/*Loop and Add TodoItem here */}
            </div>
        </div>
      </div>

    </ToDoProvider>
  )
}

export default App
