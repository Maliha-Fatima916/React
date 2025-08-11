// importing UI components/consumers (of data provided by Context)
// we  have handled the sending and fetching of Data ( Context API) within the component's file
// so here we only have to impoer that components and return them 

import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  
  return (
    <UserContextProvider>
     <h1> Context API Mini Project</h1>
     <Login /> 
     <Profile />
    </UserContextProvider>
  )
}

export default App
