import React, { useState } from 'react'
import "./useStatecounter.css";

function UseStatecounter() {
    const initialvalue = 0;
    const [count, setCount] = useState(initialvalue);
  return (
    <>
  <div className='count'>
  <h1>Counter Button</h1>
  </div>
    <div className='div'>
    
  <button className='btn' onClick={ ()=> setCount(count + 1)}>Increment:</button>
  <button className='btn' onClick={ ()=> setCount(initialvalue)}>Reset:</button>
  <button className='btn' onClick={ ()=> setCount(count - 1)}>Decrement:</button>
  <button className='btn'>{count}</button>            
     </div>
     </>
  )
}

export default UseStatecounter;