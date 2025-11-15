import React, { useState } from 'react'

export const  UseStateHook= () => {
    const [Count,setCount] = useState(0)
    const Incrementation=() => {
      setCount (Count+1)
    }
    const Dencrementation=() => {
      setCount (Count-1)
    }

  return (
    <div>
        <p> Mon compteur initial est : {Count}</p>
        <button onClick={Incrementation}>Incrementer</button>
        <button onClick={Dencrementation}>Décrementer</button>

    </div>
  )
}
