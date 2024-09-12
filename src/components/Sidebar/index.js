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

  const toggleNav = () => {
    setShowNav(!showNav);
  };  

  return (
    <div className="nav-bar">
      <nav className={showNav ? 'mobile-show' : ''}>
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
          color="#f1f0ee"
          size="3x"
          className='close-icon' />
      </nav>
      <FontAwesomeIcon 
          onClick={() => setShowNav(true)}
          icon={faBars}
          color="#f1f0ee"
          size="3x"
          className='hamburger-icon' />
    </div>
  )
}

export default Sidebar