import './index.scss'
import { useState } from 'react'
// import LogoS from '../../assets/images/logo-s.png'
// import LogoSubtitle from '../../assets/images/logo_sub.png'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/Logo.svg'

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className={`nav-bar ${showNav ? 'mobile-show' : ''}`}>
      <nav>
        <div className="nav-content">
          <Link to='/' className="logo-link" onClick={() => setShowNav(false)}>
          <img className='signature-logo' src={LogoS} alt='logo'/>
          </Link>
          <NavLink 
            activeclassname="active"
            className="about-link"
            to="/about"
            onClick={() => setTimeout(() => setShowNav(false), 100)}>About</NavLink>
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
        </div>             
      </nav>
    </div>
  )
}

export default Sidebar