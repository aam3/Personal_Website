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
      <div className='footer'></div>
      <div className="page">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout