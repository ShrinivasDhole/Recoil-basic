import { useContext, useState } from 'react'

import './App.css'
import { CountContext } from './context';

function App() {
  const [count , setCount] = useState(0);
  //wrap anyone that wants to use the teleported value inside a provider
  return (
    <div>
      <CountContext.Provider value={[count,setCount]}>

        <Count ></Count>
      </CountContext.Provider>
    </div>
  )
}

function Count(){
  const setCount = useContext(CountContext);
  return <div>
    <CounterRerender></CounterRerender>
    <Buttons setCount={setCount}></Buttons>
  </div>
}

function CounterRerender(){
  const count = useContext(CountContext);
  return <div>
    {count}
  </div>
}

function Buttons(){
  const {count ,setCount}  = useContext(CountContext)
  return <div>
    <button onClick={()=>{
      setCount(count+1)
    }}>Increase Count</button>
    <button onClick={()=>{
      setCount(count-1)
    }}>Descrease Count</button>
  </div>
}

export default App
