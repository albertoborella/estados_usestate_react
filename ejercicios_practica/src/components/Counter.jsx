import React from 'react'
import { useState } from 'react'

export const Counter = () => {
    const [count, setCount] = useState(0)

    const incrementCoun = () => {
        setCount(count + 1)
    }
    const decrementCount = () => {
        // if(count > 0) {
            setCount(count - 1)
        // }
    }

  return (
    <>
    <h2>Count: {count}</h2>
    <div>
        <button disabled={count < 1} onClick={decrementCount}>-</button>
        <button onClick={incrementCoun}>+</button>
    </div>
    
    </>
  )
}
