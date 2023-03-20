import React from 'react'
import './sidebar.css'
import AppsIcon from '@mui/icons-material/Apps';
import SortIcon from '@mui/icons-material/Sort';
import PreviewIcon from '@mui/icons-material/Preview';
import LogoutIcon from '@mui/icons-material/Logout';

export default function Sidebar() {
  return (
    <div className='sideBar'>
      {/* everything in the "sideBar", including a an Overview link, Summary link and Custom View link. At the moment these links do nothing (change this comment once they work) */}
      <div className="sideBarWrapper">
        <div className="sideBarMenu">
            <ul className="sideBarList">
                <li className="sideBarListItem active">
                    <AppsIcon className='sideBarIcon' />
                    Overview
                </li>
                <li className="sideBarListItem">
                    <SortIcon className='sideBarIcon'/>
                    Summary
                </li>
                <li className="sideBarListItem">
                    <PreviewIcon className='sideBarIcon'/>
                    Custom View
                </li>
            </ul>
        </div>
        <hr></hr>
        <div className="logout">
            <LogoutIcon className='sideBarIcon'/>
            Logout
        </div>
      </div>
    </div>
  )
}
