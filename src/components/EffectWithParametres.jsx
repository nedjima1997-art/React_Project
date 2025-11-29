import React ,{useState ,useEffect}from 'react'

export default function EffectWithParametres() {

    const [count, setcount] = useState(0)

    useEffect(() => {
      document.title =`Le nombre de clique est ${count}`
    }, [count])
    

  return (
    <div>
        <p>Vous avez cliquez {count} fois </p>
        <button onClick={()=>setcount (count+1) }>Cliquez ici</button>
    </div>
  )
}