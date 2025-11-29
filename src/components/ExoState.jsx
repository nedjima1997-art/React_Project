import React, { useState } from 'react'

function ExoState() {
  const [Color, setColor] = useState("red")
  const ChangeColor = () => {
    // !setColor("green")
    if (Color === "red") {
      setColor("purple")
    } else {
      setColor("red")
    }
  }

  return (
    <div>
      <h1 style={{ color: Color }}>Salut tout le monde</h1>
      <button onClick={ChangeColor}>Change Color</button>
    </div>
  )
}

export default ExoState