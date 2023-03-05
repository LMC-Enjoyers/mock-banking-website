import React from 'react'
import './topbar.css'
import logo from '../../assets/user.png'

export default function Topbar() {
  return (
    <div className='topBar'>
        <div className='topBarWrapper'>
            <div className='topLeft'><span className='logo'>Welcome Back, User</span></div>
            <div className='topRight'>
                <img src={logo} className='profilePic' width="32" height="32" alt='profile pic'></img>
                <span className='username'>username</span>
            </div>
        </div>
    </div>
  );
}
