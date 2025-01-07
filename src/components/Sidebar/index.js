import './index.scss'
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Sidebar = () => {
  return (
    <>
    <Navbar expand="lg" className="custom-navbar" fixed="top" collapseOnSelect="true">
      <Container className="justify-content-center">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav className="nav-content">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/publications">Publications</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
};

export default Sidebar;

// const Sidebar = () => {
//   const [showNav, setShowNav] = useState(false);

//   return (
//     <div className={`nav-bar ${showNav ? 'mobile-show' : ''}`}>
//       <nav>
//         <div className="nav-content">
//           <Link to='/' className="logo-link" onClick={() => setShowNav(false)}>
//           <img className='signature-logo' src={LogoS} alt='logo'/>
//           </Link>
//           <NavLink 
//             activeclassname="active"
//             className="about-link"
//             to="/about"
//             onClick={() => setTimeout(() => setShowNav(false), 100)}>About</NavLink>
//           <NavLink
//             activeclassname="active"
//             className="publications-link"
//             to="/publications"
//             onClick={() => setShowNav(false)}>Publications</NavLink>
//           <NavLink
//             activeclassname="active"
//             className="resume-link"
//             to="/resume"
//             onClick={() => setShowNav(false)}>Resume</NavLink>       
//         </div>             
//       </nav>
//     </div>
//   )
// }

// export default Sidebar