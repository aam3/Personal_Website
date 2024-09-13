import './index.scss'
import { useState } from 'react'
// import LogoS from '../../assets/images/logo-s.png'
// import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faClose,
} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/Logo.svg'

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="nav-bar">
      <nav>
        <div className={`nav-content ${showNav ? 'mobile-show' : ''}`}>
          <Link to='/' className="logo-link" onClick={() => setShowNav(false)}>
          <img className='signature-logo' src={LogoS} alt='logo'/>
          </Link>
          {/* <NavLink 
            exact="true"
            activeclassname="active"
            to="/"
            onClick={() => setShowNav(false)}>Home</NavLink> */}
          <NavLink 
            activeclassname="active"
            className="about-link"
            to="/about"
            onClick={() => setShowNav(false)}>About</NavLink>
          <NavLink
            activeclassname="active"
            className="publications-link"
            to="/publications"
            onClick={() => setShowNav(false)}>Publications</NavLink>
          <NavLink
            activeclassname="active"
            className="resume-link"
            to="/resume"
            onClick={() => setShowNav(false)}>Resume</NavLink>
          <FontAwesomeIcon 
            onClick={() => setShowNav(false)}
            icon={faClose}
            color="#d6d5d5"
            size="3x"
            className='close-icon' />            
        </div>
      </nav>
      <FontAwesomeIcon 
          onClick={() => setShowNav(true)}
          icon={faBars}
          color="#181818"
          size="3x"
          className='hamburger-icon' />
    </div>
  )
}

export default Sidebar