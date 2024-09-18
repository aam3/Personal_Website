import './index.scss'
import { useState } from 'react'
// import LogoS from '../../assets/images/logo-s.png'
// import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  // faBars,
  faClose,
} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/Logo.svg'

const Sidebar = () => {
  const [showNav2, setshowNav2] = useState(false);

  return (
    <div className={`nav-bar ${showNav2 ? 'mobile-show' : ''}`}>
      <nav>
        <div className="nav-content">
          <Link to='/' className="logo-link" onClick={() => setshowNav2(false)}>
          <img className='signature-logo' src={LogoS} alt='logo'/>
          </Link>
          <NavLink 
            activeclassname="active"
            className="about-link"
            to="/about"
            onClick={() => setTimeout(() => setshowNav2(false), 100)}>About</NavLink>
          <NavLink
            activeclassname="active"
            className="publications-link"
            to="/publications"
            onClick={() => setshowNav2(false)}>Publications</NavLink>
          <NavLink
            activeclassname="active"
            className="resume-link"
            to="/resume"
            onClick={() => setshowNav2(false)}>Resume</NavLink>       
        </div>
        <FontAwesomeIcon 
            onClick={() => setshowNav2(false)}
            icon={faClose}
            color="#d6d5d5"
            size="3x"
            className='close-icon' />             
      </nav>
    </div>
  )
}

export default Sidebar