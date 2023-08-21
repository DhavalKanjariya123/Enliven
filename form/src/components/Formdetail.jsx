import React from 'react'
import { Link } from 'react-router-dom';

function Formdetail() {

  return (
    <>
        <form className='form-detail mt-5'>
        <h3>Login Form</h3>
        <label className='mt-3 mb-1'>Email :</label>
        <input type="email" className='form-control' />
        <label className='mt-3 mb-1'>Password :</label>
        <input type="password" className='form-control' />
        <Link to='/login' className='mt-5 bg-primary text-white p-1'>Login</Link>
      </form>
    </>
  )
}

export default Formdetail;
