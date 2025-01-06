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
      <div className="main-content">
        <div className="page">
          <Outlet />
        </div>
        <footer className="footer">
          <p>&copy; 2025 Alisabeth Marsteller. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}

export default Layout