// this is for practicing "How a UI component send data to global file 
// (e.g. notice board that contain a chart (provider) having guest's list (Data) ) to get data stored there "

// Step1: import Notice Board to use its data
import UserContext from '../context/UserContext'

// Step2: useContext is a hook that helps us to fetch data from Context/NoticeBoard
import React, {useState, useContext} from 'react'

// Step3: prepare your UI 

function Login(){

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    // To use data stored in context use hook useContext() :  useContext( name of Notice Board )
    // …it gives you whatever you passed as value in your <UserContext.Provider>.
    const {setUser} = useContext(UserContext)

    // the 'value' of our provider contains an object (bcz of more than 1 value) having values
    //  user and setUser , we are using the 2nd value setuser of object  and saying assign a var setUser that value
    // instead this we can write: const contextValue = useContext(UserContext);
    // const setUser = contextValue.setUser;


    const handleSubmit =  (e) => {
        e.preventDefault
        setUser({username,password}) // JS object shorthand
        // when keys and variable have same name we can write them shortly as above 
        // { username: username, password: password }


    }


    return(
        <div> 
            <h2> Login </h2>

            <input 
            type = "text"
            placeholder = "username"
            value = {username}
            onChange = {(e) => setUsername(e.target.value) }
            />

            <input 
            type = "text"
            placeholder = "password"
            value = {password}
            onChange = {(e) => setPassword(e.target.value) }
            />

            <button onClick = {handleSubmit}>  Submit </button>
        </div>

    )
}

export default Login
