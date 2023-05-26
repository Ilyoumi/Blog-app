import React from 'react'
import { Link } from 'react-router-dom'
const Register = () => {
  return (
    <div className='auth'>
      <h1>Register</h1>
      <form action="">
        <input type="text"  required placeholder='username'/>
        <input type="email"  required placeholder='email'/>
        <input type="text"  required placeholder='password'/>
        <button>Login </button>
        <p>This is an error!</p>
        <span>Do you have an account <Link to="/Login">Login</Link></span>
      </form>

    </div>
  )
}

export default Register