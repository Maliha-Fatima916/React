// Practicing how to fetch Data stored in Context and use this data to perform sme task 
// task like 
// Process of fetching Data from Context is same as sending data to Context 

import React,{useContext} from 'react'

// Step1 : import Notice Board 
import UserContext from '../context/UserContext'



// Step2: Use useContext hook to fetch data , but this time use variable ( not useState's func) 
// that was  passed in value  of provider  ( the only difference )

function Profile(){
    const {user} = useContext( UserContext )

    if (!user) return <div> Please Login First </div>

    return <div> Welcome {user.username} on board </div>
}

// Step3: export this component to be use in App.jsx 
export default Profile 