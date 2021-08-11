import React from 'react';
import './styles.scss';

const Navbar = () => (
    <>
        <a href="/" className="navbar__logo">Anny</a>
        <ul className="navbar__menu">
            <a href="/test">Test</a>
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
