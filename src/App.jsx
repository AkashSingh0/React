import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  var [counter, setCounter] = useState(15)
  // var counter =5

  const addValue=()=>{
    console.log("clicked", counter);

    // counter=counter+1
    setCounter(counter+1)
  }

  const removeValue=()=>{
    setCounter(counter-1)
  }

  return (
    <>
     <h1>Hello React!</h1>
     <h2>counter value: {counter}</h2>

     <button onClick={addValue}>Add Value {counter}</button>
     <br />
     <br />
     <button onClick={removeValue}>Remove Value {counter}</button>
    </>
  )
}

export default App
