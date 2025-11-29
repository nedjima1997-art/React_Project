import React ,{useEffect, useState}from 'react'

const EffectHook = () => {
  const [data, setData] = useState([])

  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setData(data));


  }, [])

  return (
    <div>
      <h1>Poste</h1>
      <ul>
        {data.map((poste) => (
          <li key={poste.id}>{poste.title}</li>
        ))}

      </ul>
    </div>
  )
}

export default EffectHook