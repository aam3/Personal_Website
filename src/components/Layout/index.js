import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/'
import './index.scss'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
} from '@fortawesome/free-solid-svg-icons'

const Layout = () => {

  const [showNav, setShowNav] = useState(false);
  
  return (
    <div className="App">
      <div className={showNav ? 'mobile-show' : ''}>
        <Sidebar />
      </div>
      <FontAwesomeIcon 
          onClick={() => setShowNav(true)}
          icon={faBars}
          color="#181818"
          size="3x"
          className='hamburger-icon' />
      <div className="page">
        {/* <span className="tags top-tags">&lt;body&gt;</span> */}
        <Outlet />
        {/* <span className="tags bottom-tags">
          &lt;/body&gt;
          <br />
          <span className="bottom-tag-html">&lt;/html&gt;</span>
        </span> */}
      </div>
      <div className='footer'>&#8752; This website built in React JS</div>
    </div>
  )
}

export default Layout