import React from 'react'
import './Nav.css';

const Nav = (props) => (
    <section class="nav">
        <ul>
            <li>Benji's Animal Shelter</li>
            <li><a href="/about">About</a></li>
            <li><a href="/">Adopt a pet</a></li>
            <li><a href="/rocky">Rocky</a></li>
        </ul>
    </section>
)
export default Nav