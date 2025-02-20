import { useState } from "react"
import './App.css'
function App() {
  const [color, setColor] = useState("grey")

  return (
    <>
      <div className='w-full h-screen duration-200 text-white'
      style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-75 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center bg-white gap-4 shadow-lg px-3 py-3 rounded-2xl">
            <button
            onClick={()=>setColor('red')}
            className="bg-red px-4 rounded-2xl"
            style={{backgroundColor: "red"}}>Red</button>
            <button 
            onClick={()=>setColor('green')}
            className="bg-red px-4 rounded-2xl"
            style={{backgroundColor: "green"}}>green</button>
            <button 
            onClick={()=>setColor('yellow')}
            className="bg-red px-4 rounded-2xl"
            style={{backgroundColor: "yellow"}}>yellow</button>
            <button 
            onClick={()=>setColor('aqua')}
            className="bg-red px-4 rounded-2xl"
            style={{backgroundColor: "aqua"}}>aqua</button>
            <button 
            onClick={()=>setColor('orange')}
            className="bg-red px-4 rounded-2xl"
            style={{backgroundColor: "orange"}}>orange</button>
            <button 
            onClick={()=>setColor('pink')}
            className="bg-red px-4 rounded-2xl"
            style={{backgroundColor: "pink"}}>pink</button>
          </div>
        </div>
      </div> 
    </>
  )
}

export default App
