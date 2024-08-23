import React, { useEffect, useState } from 'react'

function UseEffectHooks() {

    const [counter, setCounter] = useState(0);
    useEffect(() => {
        console.log(counter)
    },[])
  return (
    <div>
        <button onClick={() => setCounter(counter + 1) }>Increment</button>
        {counter}
    </div>
  )
}

export default UseEffectHooks;