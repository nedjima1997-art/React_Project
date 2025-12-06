import React from 'react'

export const Create = () => {
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div className='w-50 border bg-secondary text-white p-5'>
            <h3> Add a new user</h3>
            <form>
                <div>
                    <label htmlFor='name'> Name:</label>
                    <input type='text' 
                    name='name' 
                    id='name' 
                    value="" 
                    className='form-control'
                    placeholder='Enter your name'
                    required />
                </div>
                <div>
                    <label htmlFor='email'> Name:</label>
                    <input type='email' 
                    name='email' 
                    id='email' 
                    value="" 
                    className='form-control'
                    placeholder='Enter your mail'
                    required />
                </div>
                <br/>
                <button className='btn btn-info'> Send </button>
            </form>
        </div>
    </div>
  )
}
