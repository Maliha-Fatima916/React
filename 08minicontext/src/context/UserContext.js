// Context API (in React)
// React’s Context API is different from API — it’s not about talking to external services, it’s about sharing data inside your React app without passing it through every single component manually.
//Imagine you’re hosting a party:
//Without Context API → You whisper the guest list to your friend, who tells another friend, who tells another… until it reaches the last person. (This is prop drilling — passing data through every layer.)
// With Context API → You put the guest list on a big board in the center of the room, and anyone can just walk up and read it without asking others.
//In coding terms:
// You create a Context that stores data (like theme, user info, etc.).
// Any component can subscribe to it and get the data directly — no middlemen

import React from "react"
// Context is actually a chart that have the list of guests

// step1: Create Context 
const UserContext = React.createContext()

//step2: export this Context , will import it in file of its provider
export default UserContext

// Step3: with each Context , we have to create provider: it is nothing but a context tag , 
// within which there are componenets of our program that will read/access/use info/data/var from this context
// will do it in a seperate folder

