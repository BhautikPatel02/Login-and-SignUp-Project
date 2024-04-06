import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Signup = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/register', { name, email, password })
      .then(result => {
        console.log(result)
        navigate('/login')
      })
      .catch(err => console.log(err))
  }

  return (
    <div className='d-flex justify-content-center align-items-center bg-success h-100'>
      <div className="bg-light p-3" >
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputName">Name</label>
            <input type="text" className="form-control rounded-sm" id="exampleInputName" aria-describedby="emailHelp" placeholder="Enter Name" onChange={(e) => setName(e.target.value)} />
          </div>
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
            <button type="submit" className="mb-1 btn btn-primary">Sign Up</button>
          </div>
        </form>
        <div className='mb-2  d-flex flex-column'>
          <p>Already Have An Account?</p>
          <Link to="/login" className="btn btn-primary">Login</Link>
        </div>
      </div>
    </div>
  )
}

export default Signup
