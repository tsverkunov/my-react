import React from 'react';
import './Header.sass';
import logo from './../../img/EXAH-business-black.svg'

const Header = () => {
    return (
        <header className="header">
            <img src={logo}></img>
        </header>
    )
}

export default Header;