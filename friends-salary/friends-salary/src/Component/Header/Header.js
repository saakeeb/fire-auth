import React from 'react';
import logo from '../../images/logo.png'
import './Header.css';



const Header = () => {
    return (
        <div className="header container-fluid" style={{width:'auto'}}>
            <img src={logo} alt="" style={{width:'auto'}} />
            <nav style={{width:'auto'}}>
                <a href="/friends">Friends</a>
                <a href="/details">Details</a>
                <a href="/about">About</a>
                <input type="text" placeholder="Input Name"/>
                <button>Search</button>
            </nav>
        </div>
    );
};

export default Header;