import React from 'react';
import './navbar.css';
import logo from '../../assets/logo1.jpg'
export default function Navbar() {
  return (
 <div className="navbar-container">
      <div className="navbar-links">
        <a href="/" className="nav-link">Accueil</a>
        <a href="/Appel" className="nav-link">Événements</a>
        <a href="/Apropos" className="nav-link">À propos</a>
      </div>
      
    <div className='navbar-logo'>
    <img className='logoimg' src={logo} />
    </div>

    <div className="nav-login">
        <a href="/login" >LOG IN</a>
    </div>
 </div>
  );
}
