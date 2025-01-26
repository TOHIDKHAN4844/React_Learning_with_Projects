import { useState } from 'react';

import './App.css'

function App() {

  
//let Counter = 5

let [Counter, setCounter] = useState(15)

const addValue = () =>{
  Counter= Counter+1

  if(Counter>20){
    Counter=20;
  }
  setCounter(Counter)
  console.log(Counter);
}
const removeValue = () =>{
  Counter= Counter-1
if(Counter<0){
  Counter=0;
  
}
  setCounter(Counter)
}

  return (
    <>
     <h1>Learn Hooks in React  {Counter} </h1>
     
     <h2>Counter value: {Counter}</h2>

     <button onClick={addValue}>Add value  {Counter}</button>
     <br />
     <button onClick = {removeValue}>Remove value  {Counter}</button>
     <p> {Counter}</p>
     {Counter === 20 && <p>You are max value</p>}
     {Counter === 0 && <p>You are in min value</p>}
    </>
  )
}

export default App
