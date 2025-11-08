import React from 'react'
import "./About.css"
import about from "./téléchargement.png"

export default function About({name,age}) {
    // const name= props.name
    // const age= props.age
  return (
    <div className='About'>
        <h2>A propos de nous</h2>
        <p> Bienvenue {name} qui a l'age de {age} sur notre site web</p>
        <img src={about} alt=""/>
    </div>
  )
}
