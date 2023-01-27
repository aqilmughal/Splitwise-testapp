import React from 'react';
import Header from '../Header/header';
import './Login.css'

const LoginForm = () => {
  return (
    <>
    <Header />
    <form className='Form'>
      <div className='box'>
          <div>
          <label htmlFor="email">First Name</label>
            <input id="email" type="text" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input id="email" type="text" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input id="password" type="password" />
          </div>
          <button className='btn'>Submit</button>
      </div>
    </form>
    </>
  );
};

export default LoginForm