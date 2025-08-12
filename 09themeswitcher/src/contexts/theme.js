// Another way to use Context API creating context Notice board and info chart in same file instead of
// 2 files as we did in minicontext
import {createContext, useContext} from react

// const ThemeContext = createContext() // can also set deafult value of context ,
//  values can be variables or methods


// Step1
export const ThemeContext = createContext(
    themeMode: 'light'
    darkTheme: () => {}
    lightTheme: () => {}
) 

// Step2
export const ThemeProvider = ThemeContext.Provider // Provider's values are available in a variable ThemeProvider

// Normally, you’d do something like:
// <ThemeContext.Provider value={...}> like in miniContext UserContextProvider file

// Here, they’re exporting the Provider directly with a new name ThemeProvider for convenience.
// So in App.js, you can just write: 
// <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}> 
//    <YourComponents/consumers />
// </ThemeProvider>

// Step 3
export default function useTheme(){
    return useContext(ThemeContext)
}

// Custom hook for consuming data of the Context
// Instead of calling useContext(ThemeContext) everywhere in your code,
// this custom hook makes it easier and cleaner.
// Usage:
// const { themeMode, darkTheme, lightTheme } = useTheme()
// Now we can get direct access to the context values anywhere in your app.
