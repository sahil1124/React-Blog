import React from 'react';
import './style.css';
import SocialMedia from '../SocialMedia'
const Header = props  =>{
  return(
    <div>
      <header className="header">
        <nav className="headerMenu">
          <a href='#'>Home</a>
          <a href='#'>About Us</a>
          <a href='#'>Contact Us</a>
        </nav>
        <div>
          <SocialMedia />
        </div>
      </header>
    </div>
  )
}

export default Header;
