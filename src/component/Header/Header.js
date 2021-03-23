import React from 'react';
import logo from '../../new f pic/images(15).jpg';
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <nav>
                <a href=""> Menu</a>
                <a href="">Team</a>
                <a href="">Match-Summary</a>
            </nav>
            <img src={logo} alt=""/>
            <h2>Add Player to select Your team</h2>
        </div>
    );
};

export default Header;