import './App.css'

function App() {
  // Here Step2 
 
  // same name variable is declared as a default var was present in context , To change default var value we have use useState , useStates setThememmode function will change its value
  const [themeMode, setThemeMode] = useState('light') 

  // make methods of same name if you do not know the functionality of methods being declared in Context
  
  // same name funcs responsible for changing value of defualt var themeMode
  const lightTheme = () => {
    return setThememmode('light')
  }

  const lightTheme = () => {
    return setThememmode('dark')
  }
  
  // actual code for toggling the theme
  // using useEffect bcz we want when the themeMode ( dependency) change change the theme (run the function)
  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])
  
  return (

    <ThemeProvider value={{themeMode,lightTheme, darkTheme}}>  {/* Step1: Accessing the default values, that are actually values of provider*/}
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
            </div>
      </div>

    </ThemeProvider>
  )
}

export default App
