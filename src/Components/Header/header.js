import React from 'react'
// import LoginForm from '../Login/Login'
import './header.css'
// import Expense from 'Components/Expense/Expense'
import Expense from '../Expense/Expense'

const Header = () => {
  // function onClickHandle() {
  //   console.log('signup')
  //   window.location.replace('login',) 
  // }


  return (
  <>
    <div className='Header_bar'>
      <img className='sp1' src='https://plates.splitwise.com/images/splitwise-logo-bordered.png'></img>
      <h1> Splitwise</h1>
      {/* <button className='btn1' > Add an Expense</button> */}
      {/* <button className='btn2' onClick={onClickHandle} > Sign up</button> */}
      
      <a className='btn1' href='/login'>sign up</a>
      <a className='btn2' href='/add'>   Add an Expense </a>
     </div>

  </>
   
   
  )
}

export default Header