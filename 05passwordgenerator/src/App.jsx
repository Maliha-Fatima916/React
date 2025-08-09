import { useState, useCallback, useEffect } from 'react'

function App() {

  const [length, setLength] = useState(8)
  const [numbers, setNumbers] = useState(false)
  const [symbols, setSymbols] = useState(false)
  const [password, setPassword] = useState('')

  const generator = useCallback( () => {
    let passcode = ""
    let st = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numbers){
      st += "0123456789"
    }

    if (symbols){
      st += "!@#$%^&*"
    }

    for (let i = 1; i <= length; i++) {
      const characterIndex = Math.floor(Math.random() * st.length + 1)
      passcode += st.charAt(characterIndex)
    }

  },[length,numbers,symbols,setPassword])

  
  useEffect(() => { generator()}, [length,numbers,symbols,generator])
  return (
  <>
    <div className= " w-full max-w-md mx-auto shadow-lg rounded-lg px-4 my-8 bg-gray-700 text-sm text-orange-500"> 
            <h1 className="text-white text-center my-3 " > Password Generator </h1>
      <div className = "flex rounded-lg overflow-hidden mb-4"> 

        <input type = "text" 
        value = {password}
        className = "outline-none w-full px-1 py-3 "
        readonly  />
       
      </div>

      <div className="flex items-center gap-2 cursor-pointer">
           <input type="checkbox" className="w-4 h-4" defaultChecked = {numbers}  onChange = {() => {setNumbers((prev) => !prev); } }/>
           <label> Numbers </label>
      </div>

      <div className="flex items-center gap-2 cursor-pointer">
           <input type="checkbox" className="w-4 h-4" defaultChecked = {symbol}  onChange = {() => {setSymbol((prev) => !prev); } } />
           <label> Symbols </label>
      </div>

    <div className="flex text-sm gap-x-2">   
      <div className="flex item-center gap-x-1"> 
        <input
          type="range"
          min="8"
          max="100"
          className="w-64 accent-pink-500"
          onChange = {(e) => { setLength(e.target.value) }}
        />
       </div>
       <label> Length: {length} </label>
    </div>



    </div>
  

  </>
  )
}

export default App
