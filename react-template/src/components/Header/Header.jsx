import React from 'react';
import './Header.css';
import { navLinks } from '../../Constants/navLinks';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
         <div className="logo">
        <NavLink to="/" className="logo-link">
          React App
        </NavLink>
      </div>
      <nav className="nav">
        {navLinks.map((link) => (
            <NavLink key={link.path} to={link.path} className="link">{link.label}</NavLink>
        ))}
      </nav>
    </header>
  );
}


export default Header;