import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch } from './redux/store'
import { increment,decrement, reset, } from './redux/action/counterAction'




const App = () => {

  // const count = useSelector((state:any) => {
  //   console.log(state)
  //   return state.counter.count
  // })
  const count = useSelector((state:any) => state.counter.count)

  const dispatch: AppDispatch = useDispatch()

  const handleIncrement = () => {
    dispatch(increment())
  }

  const handleDecrement = () => {
    dispatch(decrement())
  }

  const handleReset = () => {
    dispatch(reset(0))
  }

  return <div>
    <h1>Count: {count}</h1>
    <button onClick={handleIncrement}>+</button>
    <button onClick= {handleReset}>reset</button>
    <button onClick={handleDecrement}>-</button>
  </div>
  
}

export default App
