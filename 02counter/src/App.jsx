import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(15)

  // let counter =15;
  function addValue(){
    // console.log(counter);
    // counter=counter+1;
    setCounter(counter+1)
  }
  
  const removeValue=()=>{
    // console.log(counter);
    // counter=counter-1;
    setCounter(counter-1);
  }
  return (
    <>
      <h1>COUNTER APP</h1>
      <h2>counter value : {counter}</h2>
      <button
      onClick={addValue}> add value</button>
      <br />
      <br />
      <button
      onClick={removeValue}> remove value</button>
      <footer>footer counter: {counter}</footer>
    </>
  )
}

export default App
