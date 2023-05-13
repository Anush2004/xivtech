import React from 'react'
import './Navbar.css'
import SearchIcon from '@mui/icons-material/Search';

function Navbar() {

    const navItems = ["Services", "Career", "About", "Contact"];

    return (
        <div className="navbar">
            <div className="logo">
                <img src="https://www.xivtech.io./logo.svg" alt="logo"></img>
                <img src="https://www.xivtech.io./Text.svg" alt="Text"></img>
            </div>
            <div className="nav-menu">
                {
                    navItems.map(item => (<div className="nav-item">{item}</div>))
                }
                <div className="nav-item btn">Let's Talk</div>
            </div>

        </div>
    )
}

export default Navbar;