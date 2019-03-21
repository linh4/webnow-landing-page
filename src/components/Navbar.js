import React, { useState, useEffect } from 'react';
import { Link } from "react-scroll";

const Navbar = () => {

  const [ scroll, setScroll ] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > 150) {
      setScroll(true)
    } else if (window.scrollY < 150) {
      setScroll(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, [])

  return (
    <nav className={"nav " + (scroll ? "sticky" : "none")}>
      <h3 className="nav__logo"><Link to="header" smooth={true} duration={1000}>MyWebNow</Link></h3>
      <ul>
        <li><Link to="header" smooth={true} duration={1000}>Home</Link></li>
        <li><Link to="section-services" smooth={true} offset={-100} duration={1000}>Why Us</Link></li>
        <li><Link to="footer" smooth={true} duration={1000}>Contact Us</Link></li>
        <li><a href="#">Login</a></li>
        <button className="btn btn--green btn--nav">Support</button>
      </ul>
    </nav>
  )
}

export default Navbar;
