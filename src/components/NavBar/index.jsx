import React from 'react';
import './styles.scss';

const Navbar = () => (
    <>
        <p className="navbar__logo">Anny</p>
        <ul className="navbar__menu">
            <li>Test</li>
            <li>CV</li>
            <li>About</li>
            <li>Hooby</li>
            <li>Templates</li>
        </ul>
        <div className="navbar__btn"> 
            <button>Get to know me</button>
        </div>
    </>
);

export default Navbar;
