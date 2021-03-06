import React, { useState, useEffect } from 'react';
import { Link } from "react-scroll";
import { slide as Menu } from 'react-burger-menu'; //show burger menu in responsive design

const Navbar = () => {

  const [ scroll, setScroll ] = useState(false)

  // show sticky navbar only when scroll down 150px
  const handleScroll = () => {
    if (window.scrollY > 150) {
      setScroll(true)
    } else if (window.scrollY < 150) {
      setScroll(false)
    }
  }

  // useEffect update the event listener for scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  })

  const links = () => {
    return (
      <ul>
        <li><Link to="header" smooth={true} duration={1000}>Home</Link></li>
        <li><Link to="section-services" smooth={true} offset={-100} duration={1000}>Why Us</Link></li>
        <li><Link to="footer" smooth={true} duration={1000}>Contact Us</Link></li>
        <li><a href="/login">Login</a></li>
        <button className="btn btn--green btn--nav">Support</button>
      </ul>
    )
  }

  return (
    <>
      <div className="burger-navbar">
        <Menu left isOpen={false}>
        {links()}
        </Menu>
      </div>

      <div className="navbar">
      <nav className={"nav " + (scroll ? "sticky" : "none")}>
      <h3 className="nav__logo"><Link to="header" smooth={true} duration={1000}>MyWebNow</Link></h3>
      {links()}
      </nav>
      </div>

    </>
  )
}

export default Navbar;
