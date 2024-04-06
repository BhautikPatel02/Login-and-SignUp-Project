import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/login', { email, password })
      .then(result => {
        console.log(result)
        if(result.data === "Success"){
          navigate('/home')

        }
      })
      .catch(err => console.log(err))
  }
  return (
    <div className='d-flex justify-content-center align-items-center bg-success h-100'>
      <div className="bg-light p-3" >
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className='mb-2 mt-3 d-flex flex-column'>
            <button type="submit" className="mb-1 btn btn-primary">Login</button>
          </div>
        </form>
        <div className='mb-2  d-flex flex-column'>
          <p>Don't have an account?</p>
          <Link to="/register" className="btn btn-primary">Sign Up</Link>
        </div>
      </div>
    </div>
  )
}

export default Login
