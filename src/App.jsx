import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementByAmount } from './redux/features/CounterSlice'

const App = () => {
  const [num, setNum] = useState(5)
  const dispatch = useDispatch()
  const count =  useSelector((state)=>state.counter.value)
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>{
         dispatch(increment())
      }}>Increment
      </button>
      <button onClick={()=>{
        dispatch(decrement())
      }}>Decrement
      </button>
      <input type="text" value={num} onChange={(e)=>{
           setNum(e.target.value)
      }} />
      <button onClick={()=>{
       dispatch(incrementByAmount(Number(num)))
      }}>
        Increment by amount
      </button>
    </div>
  )
}

export default App