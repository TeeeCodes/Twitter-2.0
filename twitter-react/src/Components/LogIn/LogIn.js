import './Login.css'
import React, { useState } from 'react';


const Login = () => {
  
    const [show, setShow] = useState('hide')

    const popup = () => {
        setShow("login-popup")
        setTimeout(() => show("hide"), 3000)
    }

	return(
    <div className='cover'>
        <h1>Test</h1>
        <input type='text' placeholder='username' />
        <input type='password' placeholder='password' />

        <div className='login-btn' onClick={popup}>Login</div>

        <p className='text'>Or Login Here.</p>

        <div className='alt-login'>
            <div className='facebook'></div>
            <div className='google'></div>
        </div>

        <div className={show}>
            <h3>Login Failed</h3>
            <p>username or password incorrect</p>
        </div>
    </div>
	)
}

export default Login  