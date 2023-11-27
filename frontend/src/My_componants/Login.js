import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import InvalidPopup from './InvalidPopup';
import './Login.css';

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showInvalidPopup, setShowInvalidPopup] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    let result = await fetch(
      '/signin', {
          method: "POST",
          body: JSON.stringify({email, password}),
          headers: {
              'Content-Type': 'application/json'
          }
      })
    console.log("here");
    result = await result.json();
    console.warn(result);
    if (result.message === 'Login successful') {
      setEmail('');
      setPassword('');
      history.push('/home');
    } else {
      setShowInvalidPopup(true);
      setEmail('');
      setPassword('');
      history.push('/login');
    }
  };

  return (
    <div className="login-form-container bg-light ">
      <h1 className='text-center'>Login </h1>
      <form method='POST'>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="text"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {<div className="error-message"></div>}

        <button type="submit" onClick={handleLogin}>Login</button>
        <p>
          New user? <Link to="/signup">Sign up here</Link>.
        </p>
      </form>
      {showInvalidPopup && ( 
        <InvalidPopup trigger={true} setTrigger={setShowInvalidPopup}>
          <h3>Invalid Credentials</h3>
        </InvalidPopup>
      )}
    </div>
  );
}

export default Login;
