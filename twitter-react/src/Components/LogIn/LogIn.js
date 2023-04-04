import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import './Login.css'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [formError, setFormError] = useState('');

  const USERS_URL = "https://twitter-revised-2a847-default-rtdb.firebaseio.com/users";

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    const user = {
      username,
      password,
    };

    try {
      // Add browser validation logic here
      const response = await fetch(`${USERS_URL}?orderBy="username"&equalTo="${user.username}"`);
      const users = response.data;

      if (!users) {
        throw Error("Username doesn't exist.");
      }

      const [userInfoDb] = Object.values(users);
      if (userInfoDb.password !== user.password) {
        throw Error("Invalid password.");
      }

      localStorage.setItem('userInfo', JSON.stringify(userInfoDb));
      Navigate('dashboard');
    } catch (error) {
      setFormError(error.message);
    }
  };

  const handleInputChange = (e) => {
    if (e.target.id === 'username') {
      setUsername(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };

  return (
    <div className="form">
      <form onSubmit={handleLoginSubmit} id="login">
        <div className="form__message">{formError}</div>
        <div className="form__input-group">
          <input
            type="text"
            id="username"
            name="username"
            className="form__input"
            placeholder="Username"
            value={username}
            onChange={handleInputChange}
          />
          <div className="form__input-error-message"></div>
        </div>
        <div className="form__input-group">
          <input
            type="password"
            id="password"
            name="password"
            className="form__input"
            placeholder="Password"
            value={password}
            onChange={handleInputChange}
          />
          <div className="form__input-error-message"></div>
        </div>
        <button type="submit" id="submitBtn" className="form__button">Log In</button>
        <a href='signup' className='link'>New? Create an Account Here!!!</a>
      </form>
    </div>
  );
};

export default Login;
