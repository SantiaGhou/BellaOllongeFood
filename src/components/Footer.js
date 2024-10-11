import React from 'react';
import './Footer.css';
import instagram from './instagram.png';
import facebook from './facebook.png';
import logo from './logo.png';
import twitter from './twitter.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-text">
                <h3>Copyright 2020 Bella Onojie.com</h3>
            </div>
            <div className="social-icons">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src={instagram} alt="Instagram" />
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <img src={facebook} alt="Facebook" />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    <img src={twitter} alt="Twitter" />
                </a>
            </div>
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
        </footer>
    )
}

export default Footer;
