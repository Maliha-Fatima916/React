import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("black") // as color need to be change so we used a variable 
  // as changes need to be reflected on UI so we used usestate()
  // to reduce transparency of a color , write as rgba: rgba(255, 192, 203, 0.15)

  return (
    <>
     <div className=" w-full h-screen duration-200" style={{backgroundColor: color}} >
      <h1 className = "absolute top-[250px] left-[600px]" style = {{color : "rgba(255, 215, 0, 0.25)"}}> Background Changer </h1>
     </div>
     
     <div className="absolute left-[400px] bottom-[50px] flex flex-wrap justify-center w-fit h-fit gap-3 border-2 border-black rounded-full p-3 " style = {{backgroundColor: "rgba(255, 192, 203, 0.15)" }}>

        <button className="rounded-full w-[70px] h-[35px] py-3 px-2 border-2 border-black  shadow-lg" style = {{backgroundColor: "#006600"}} onClick = {() => setColor("#006600")}>  </button>
        <button className="rounded-full w-[70px] h-[35px] py-3 px-2 border-2 border-black  shadow-lg" style = {{backgroundColor: "#4a5d23"}} onClick = {() => setColor("#4a5d23")}>  </button>
        <button className="rounded-full w-[70px] h-[35px] py-3 px-2 border-2 border-black  shadow-lg" style = {{backgroundColor: "#FFF8DC"}} onClick = { () => setColor("#FFF8DC")}>  </button>
        <button className="rounded-full w-[70px] h-[35px] py-3 px-2 border-2 border-black  shadow-lg" style = {{backgroundColor: "#e1a95f"}} onClick = { () => setColor("#e1a95f")}>  </button>
        <button className="rounded-full w-[70px] h-[35px] py-3 px-2 border-2 border-black  shadow-lg" style = {{backgroundColor: "#E08D3C"}} onClick = { () => setColor("#E08D3C")}>  </button>
        <button className="rounded-full w-[70px] h-[35px] py-3 px-2 border-2 border-black  shadow-lg" style = {{backgroundColor: "#ad6507ff"}} onClick = { () => setColor("#ad6507ff")}> </button>



      </div>
    </>
  )
}

export default App
