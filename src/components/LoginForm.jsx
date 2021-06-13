/** @format */
import { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const API_URL = 'https://api.chatengine.io/chats';

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = {
      'Project-ID': process.env.REACT_APP_PROJECT_ID,
      'User-Name': username,
      'User-Secret': password,
    };
    try {
      await axios.get(API_URL, { headers: authObject });

      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      window.location.reload();
    } catch (err) {
      setError('Oops , incorrect credentials.');
    }
  };

  return (
    <div className='wrapper'>
      <div className='form'>
        <h1 className='title'>Chat App</h1>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className='input'
            placeholder='Username'
            required
          />
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='input'
            placeholder='Password'
            required
          />
          <div align='center'>
            <button type='submit' className='button'>
              <span>Start Chatting</span>
            </button>
          </div>
          <h2 className='error'>{error}</h2>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
