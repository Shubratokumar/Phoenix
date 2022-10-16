import React from 'react';
import "../styles/header.css"

const Header = () => {
    return (
        <div className='header'>
            <div className='logo'>
                <h1>Phoenix Media</h1>
            </div>
            <div className='links'>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
                <a href="#marketplace">Marketplace</a>
            </div>            
        </div>
    );
};

export default Header;