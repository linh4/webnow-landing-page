import React from 'react';

const Header = () => (
  <header className="header">

    <nav className="nav">
      <h3 className="nav__logo">MyWebNow</h3>
      <ul>
        <li>Home</li>
        <li>Why Us</li>
        <li>Contact Us</li>
        <li>Login</li>
        <button className="btn btn--green btn--nav">Support</button>
      </ul>
    </nav>

    <div className="header__text-box">
      <h1 className="heading-primary">Get a website in <br/> 15 minutes <span>or less</span></h1>
      <form action="#" className="search">
       <input type="text" className="search__input" placeholder="Write your domain name here.."/>
       <button className="btn btn--green btn--search">Search</button>
      </form>
    </div>

    <div className="header__pointer">
      <h3 className="heading-tertiary">Learn how we can enhance your business</h3>
      <div className="header__pointer-icon">
        <span>&#8675;</span>
      </div>
    </div>
  </header>
)

export default Header;
