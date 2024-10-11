import React from 'react';
import './Header.css'; // Importando o arquivo CSS
import logo from './logo.png';

const Header = () => {
  return (
    <header className="header"> 
     
  <img src={logo} alt="logo" className="logo" />
      <nav>
        <ul className="nav-list"> 
          <li>Home</li>
          <li>Product</li>
          <li>Faq</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;