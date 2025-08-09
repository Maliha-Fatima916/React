// Why .jsx bcz in it just like jsx only a single tag will be returned

//1. Concept of a Context Provider
//When you create a context in React, you get two things:
//  Provider → the "store" that holds and gives out the data.
//  Consumer → the "customer" that takes the data.
//  The Provider is like a water tank:
//  You fill it with some data (value) if values more than 1 then pass them within {} , value={ {a,b,c,d} }
//Any component inside its range can get that water (data) without pipes running through every house (no prop drilling).
//In short:
//Provider’s job → Give its value to all children inside it.
//Scope → Only components inside the provider can access the value


const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null)
    return(
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}
