import React from 'react'

export default function Calculatrice({module1, module2}) {

    // moy= (module1+module2)/2
  return (
    <div className='Calcul'>
        <p> la moyenne des deux modules est { (module1+module2)/2} </p>
    </div>
  )
}
