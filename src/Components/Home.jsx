import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div className='Container'>
        <h2>Crud App with Redex Toolkit</h2>
        <Link to="/add" className='btn btn-success my-3' > Ajouter </Link>
        <h3> Liste des utilisateurs </h3>
        <table className='table'> 
            <thead>
                <tr>
                    <th> ID </th>
                    <th> Nom </th>
                    <th> Email </th>
                    <th> Action </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Nedjima</td>
                    <td>aaaaa@gmail.com</td>
                    <td>
                        <Link to="edit" className='btn btn-primary  me-2'> Modifier </Link>
                        <button className='btn btn-danger btn-sm'> Supprimer </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
