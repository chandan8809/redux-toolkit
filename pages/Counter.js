import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../features/counterSlice'
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
 

function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <Button
        label=' Increment'
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        />
         
        
        <span>{count}</span>
        <Button
        label='Decrement'
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        />
          
       
      </div>
    </div>
  )
}

export default Counter