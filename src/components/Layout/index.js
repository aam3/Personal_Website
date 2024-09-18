import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/'
import './index.scss'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars
} from '@fortawesome/free-solid-svg-icons'

const Layout = () => {

  const [showNav, setShowNav] = useState(false);
  
  return (
    <div className="App">
      <div className={`sidebar-div ${showNav ? 'mobile-show' : ''}`}>
        <Sidebar />
      </div>
      <FontAwesomeIcon 
          onClick={() => setShowNav(true)}
          icon={faBars}
          color="#ffd700"
          size="3x"
          className='hamburger-icon' />
      <div className="page">
        <Outlet />
      </div>
      <div className='footer'>&#8752; This website built in React JS</div>
    </div>
  )
}

export default Layout