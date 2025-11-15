import React, {useState} from 'react'

const ExoState = () => {
    const [couleur, setCouleur] = useState("dark")
    const Change =() => {
        setCouleur("red")
    }
  return (
    <div>
        <h1 style={{color : couleur}}>Salut tout le monde</h1>
        <button onClick={Change}>ChangeColor</button>
    </div>
  )
}

export default ExoState