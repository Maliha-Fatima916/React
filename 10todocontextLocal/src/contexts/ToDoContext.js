import {createContext,useContext} from 'react'

//Step1: create context

// default vals of a context can be variables or functions , 
// remember here we only initialize functions  do not write their definition/working , it is done in App.jsx where theie work is defined under this same name 

// functionalities In our ToDo: 
// 1. Write name of to-do    2. change/Update this name   3. Delete this To-Do     4.Add a new to-do
// we will put these functionalities in Context so that different UI components having one of these functionalities can communicate with each other and work in coordination

const ToDoContext = createContext({
    todos:[ // each To-Do patti is an object
        {
            id: 1, // each to-do patti will have an id , name and checkbox
            todoTitle: "to-do msg",
            complete: false
        }
    ],
    addTodo: (todoTitle) => {}, // yeh func To-do ka naam ly ga or ussy add kr dy ga
    updatedTodo: (id, todoTitle) => {}, // yeh func bty ga k konsi id wly to-do ko update krna ha or phir uss ka updated naam kia rkhna ha
    deleteTodo : (id) => {}, // delete to-do with id = 1212
    toggleComplete: (id) => {} // chage state of this id to-do from incomplete to complete
})

//Step2: export this context as hook (our own created)
export const useTodo = () => {
    return useContext(ToDoContext)
}

//Step3: store Provider in a variable to create less chaos in App.jsx

export const ToDoProvider = ToDoContext.Provider