import React from 'react'
import './topbar.css'
import logo from '../../assets/steven.jpg'

export default function Topbar() {
  return (
    
    <div className='topBar'>
      {/* everything in the "topBar", including a welcome message for the user, the users profile picture and account name */}
        <div className='topBarWrapper'>
            <div className='topLeft'><span className='logo'>Welcome Back, Steven Bradley</span></div>
            <div className='topRight'>
                <img src={logo} className='profilePic' width="32" height="32" alt='profile pic'></img>
                <span className='username'>Steven Bradley</span>
            </div>
        </div>
    </div>
  );
}
