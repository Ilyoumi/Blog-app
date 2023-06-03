import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const Register = () => {
	const [inputs, setInputs] = useState({
		username : '',
		email: '',
		password : ''
	})

	const handleChange = e  => {
		setInputs(prev=>(
			{
				...prev, [e.target.name] : e.target.value
			}
		))
	}
	const handleSubmit =async e => {
		e.preventDefault()
		try{
			const res = await axios.post("http://localhost:4000/api/auth/register", inputs)
			console.log(res)
		}
		catch(err){
			console.log(err)
		}

	}
	return (
		<div className='auth'>
				<h1>Register</h1>
				<form action="">
				<input type="text"  required placeholder='username' name='username' onChange={handleChange} />
				<input type="email"  required placeholder='email' name='email'  onChange={handleChange}/>
				<input type="text"  required placeholder='password' name='password'  onChange={handleChange}/>
				<button onClick = {handleSubmit}>Register </button>
				<p>This is an error!</p>
				<span>Do you have an account <Link to="/Login">Login</Link></span>
				</form>

		</div>
	)
}

export default Register