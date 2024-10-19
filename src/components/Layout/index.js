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
      </div>
      <div className='footer'>&#8752; This website built in React JS</div>
    </div>
  )
}

export default Layout