import React, { useState } from 'react';
import './New.css'
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const USERS_URL = "https://twitter-revised-default-rtdb.firebaseio.com/users"
  const POSTS_URL = "https://twitter-revised-default-rtdb.firebaseio.com/posts"
  const NEW_URL = 'https://twitter-revised-2a847-default-rtdb.firebaseio.com/newusers'

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(NEW_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 
        "Access-Control-Allow-Origin": "https://twitter-revised-default-rtdb.firebaseio.com/"},
        body: JSON.stringify({ name, email, password }),
      });
      if (!response.ok) {
        throw new Error('Error creating account.');
      }
      const data = await response.json();
      localStorage.setItem('token', data.token);
      navigate('login');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className='cover'>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className='form__input-group'>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='form__input-group'>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='form__input-group'>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className='login-btn'>Sign Up</button>
        {error && <p>{error}</p>}
        <a href='/'>Already have an Account? Sign in Here!!</a>
      </form>
    </div>
  );
};

export default SignUp;
