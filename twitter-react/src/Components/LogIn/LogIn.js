import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
   const [email, setEmail] = useState('');
   const [pass, setPass] = useState('');
   const [error, setError] = useState('');
   const navigate = useNavigate();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, pass}),
            });
            if (!response.ok) {
                throw new Error('Invalid login info.');
            }
            const data = await response.json();
            localStorage.setItem('token', data.token);
            navigate.push('/');
        }   catch(error) {
            setError(error.message)
        }
    };

	return(
    <div className='authorizeBox'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
        {error && <p>{error}</p>}
      </form>
    </div>
	)
}

export default Login  