
import './App.css'
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil';
import { countAtom, evenSelector } from './store/atoms/count';

function App() {
  //wrap anyone that wants to use the teleported value inside a provider
  return (
    <div>
      <RecoilRoot>
        <Count ></Count>
      </RecoilRoot>
    </div>
  )
}

function Count(){
  return <div>
    <CounterRerender></CounterRerender>
    <Buttons></Buttons>
  </div>
}

function CounterRerender(){
  const count = useRecoilValue(countAtom);
  return <div>
    {count} <br />
    <EvenSelector></EvenSelector>
    </div>
}

function EvenSelector(){
  const isEven = useRecoilValue(evenSelector);
  return <div>
    {isEven ? "Count is even" : null }
  </div>
}

function Buttons(){
  const setCount = useSetRecoilState(countAtom);
  console.log("Button re-renders")
  return <div>
    <button onClick={()=>{
      setCount(count => count + 1)
    }}>Increase Count</button>
    <button onClick={()=>{
      setCount(count => count - 1)
    }}>Descrease Count</button>
  </div>
}

export default App
