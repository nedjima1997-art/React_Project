import React, {useState,useEffect} from 'react'

export default function EffectWIthCleanup() {

  const [count, setCount] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev=>prev+1)
    },1000);
    return () => clearInterval(interval)
  }, [])
  


  return (
    <div>Compteur :{count}</div>
  )
}