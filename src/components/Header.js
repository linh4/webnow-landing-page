import React from 'react';
import Navbar from './Navbar';
import { Link } from "react-scroll"; //apply scroll for clicking on the navbar link

const Header = () => (
  <header className="header">

    <Navbar />

    <div className="header__text-box">
      <h1 className="heading-primary">Get a website in <br/> 15 minutes <span>or less</span></h1>
      <form action="#" className="search">
       <input type="text" className="search__input" placeholder="Write your domain name here.."/>
       <button className="btn btn--green btn--search">Search</button>
      </form>
    </div>

    <div className="header__pointer">
      <h3 className="heading-tertiary">Learn how we can enhance your business</h3>
      <Link className="header__pointer-icon" to="section-services" smooth={true} offset={-100} duration={1000}><span>&#8675;</span></Link>
    </div>
  </header>
)

export default Header;
