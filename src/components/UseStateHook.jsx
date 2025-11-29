import React, { useState } from 'react'

function UseStateHook() {
  // useStateSnippet "setcount" est une fonction pour metre à jour le state
  const [count, setcount] = useState(0)

  const Incrémentation = () => {
    setcount(count + 1)
  }
  const Décrémentation = () => {
    setcount(count - 1)
  }
  return (
    <div>
      <p>Mon compteur initial est : {count} </p>
      <button onClick={Incrémentation}>Incrémenter</button>
      <button onClick={Décrémentation}> Décrémenter</button>
    </div>
    
  )
}

export default UseStateHook
