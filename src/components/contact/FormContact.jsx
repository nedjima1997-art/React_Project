import React from 'react'
import "./contact.css"

const Contact = () => {
  return (
    <form className='Form'>

        <label htmlFor="Name">Votre Nom</label>
        <input type="text" />

         <label htmlFor="Surname">Votre Prénom</label>
        <input type="text" />

          <label htmlFor="email">Votre Email</label>
        <input type="email" />

          <label htmlFor="password">Votre Mot de passe</label>
        <input type="password" />
        <input type="submit" name='Envoyer'/>

    </form>
  )
}

export default Contact