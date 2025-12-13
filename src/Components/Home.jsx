import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchUsers } from '../Redux/UserReducer'

export const Home = () => {
  const {list:users,status,error}=useSelector((state)=>state.users)
  console.log(users,'usersss');
  
    const dispatch= useDispatch()
    useEffect(() => {
      if (status === "idle") {
        dispatch(fetchUsers())
      }
    }, [dispatch, status])
    
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
            {users.map((user)=>(
                <tr>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <Link to="edit" className='btn btn-primary  me-2'> Modifier </Link>
                        <button className='btn btn-danger btn-sm'> Supprimer </button>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}
