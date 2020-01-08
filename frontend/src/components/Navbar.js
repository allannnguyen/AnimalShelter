import React from 'react';
import logo from './logo.png'
import './Navbar.css';

function Navbar() {
    return (
        <div class="container">
            <div class="head">
                <img src={logo} class="logo" alt="logo"></img>
                Benji's animal shelter
            </div>
            <div>
                <li class="menu">
                    <ul><a href="#">About</a></ul>
                    <ul><a href="#">Adopt a pet</a></ul>
                </li>
            </div>
        </div>
    )
}

export default Navbar