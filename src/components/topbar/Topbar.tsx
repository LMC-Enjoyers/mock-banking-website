import React from 'react'
import './topbar.css'
import logo from '../../assets/steven.jpg'

export default function Topbar() {
  return (
    
    <div className='flex bg-white h-32 items-center'>
      <div className='flex p-2 ml-16 justify-start text-center w-1/2 text-3xl font-semibold'>
        Welcome back, Steven
      </div>
      <div className='flex flex-grow'>
        <div className='inline-flex justify-center p-2 ml-auto mr-16 break-normal items-center'>
          <img src={logo} className='rounded-full h-12 w-12' alt='profile pic'></img>
          <div className='inline-flex items-center p-4 text-lg text-bank-grey'>Steven Bradley</div>
        </div>
      </div>
    </div>
  );
}