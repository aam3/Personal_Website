import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/'
import Footer from '../Footer/'
import './index.scss'
import { useState, useEffect, useRef } from 'react'

const Layout = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const pageRef = useRef(null);

  const handleScroll = () => {
    if (pageRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = pageRef.current;
      const maxScroll = scrollHeight - clientHeight;
      const progress = Math.min(Math.max(scrollTop / maxScroll, 0), 1);
      setScrollProgress(progress);
    }
  };

  useEffect(() => {
    const pageElement = pageRef.current;
    if (pageElement) {
      pageElement.addEventListener('scroll', handleScroll);
      handleScroll();
    }

    return () => {
      if (pageElement) {
        pageElement.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div className="App">
      <Sidebar />
      <div className="main-content">
        <div className="page" ref={pageRef}>
          <div className="page-content">
            <Outlet />
          </div>
        </div>
        <Footer scrollProgress={scrollProgress} />
      </div>
    </div>
  )
}

export default Layout