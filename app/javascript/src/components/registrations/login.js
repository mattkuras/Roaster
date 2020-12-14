import React, { useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import './login.css'


  const Login = (props) => {
   
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    name == 'email' ? setEmail(value) : setPassword(value)
  };


  const handleSubmit = (event) => {
    event.preventDefault()
    let account = {
      email: email,
      password: password
    }
    axios.post('/login', { account }, { withCredentials: true })
      .then(response => {
        if (response.data.logged_in) {
          console.log(response.data)
          props.handleLogin(response.data)
        //   redirect()
         console.log('youre good')
        } else {
            setErrors(response.data.errors)
        }
      })
      .catch(error => console.log('api errors:', error))
  };



  const redirect = () => {
    props.history.push('/')
  }


  const handleErrors = () => {
    return (
      <div>
        <ul>
          {errors.map(error => {
            return <li key={error}>{error}</li>
          })}
        </ul>
      </div>
    )
  }
 
    return (
      <div className='login-container'>
        <div className='login-slogan'>
          <p>You are what you do.</p>
          <p>You decide what you do.</p>
          <p>You decide who you are.</p>
          <p>We're just here to remind you.</p>
        </div>
        <form className='login-form' onSubmit={handleSubmit}>
          <h1>Habit<br /> Helper</h1>
          <input className='login-input'
            placeholder="email"
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
          />
          <input className='login-input'
            placeholder="password"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
          <button className='login-submit-button'
            placeholder="submit"
            type="submit">
            Log In
          </button>
          <div className='or-sign-up'>
            <p> <a href='/signup'>or sign up</a></p>
          </div>

        </form>
        <div>
          {
            errors ? handleErrors() : null
          }
        </div>
      </div>
    );
  }

export default Login;