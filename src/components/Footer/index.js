import './index.scss'

const Footer = ({ scrollProgress }) => {
  return (
    <footer className="footer" style={{ transform: `translateY(${100 - scrollProgress * 100}%)` }}>
      <p>&copy; 2025 Alisabeth Marsteller. All rights reserved.</p>
    </footer>
  )
}

export default Footer
