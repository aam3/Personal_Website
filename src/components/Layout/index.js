import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/'
import './index.scss'
// import { useState } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {
//   faClose,
//   faBars
// } from '@fortawesome/free-solid-svg-icons'

const Layout = () => {
  
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <Outlet />
        <div className="footer">
          <p>&copy; 2025 Your Website. All rights reserved.</p>
        </div>        
      </div>
    </div>
  )
}

export default Layout