import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./nav.css"

function Navbar() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleItemClick = (item) => {
        onSelect(item);
        setIsOpen(false); 
      };
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    MedTech Brilliance
                </div>
                <ul className={dropdownOpen ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <a href='/home'>
                            <h7 style={{color:"black"}}>Home</h7>
                            <i class="fa-solid fa-house" style={{marginLeft:"10px", color:"black"}}></i>
                            </a>

                        
                    </li>
                    
                    <li className="nav-item">
                        <input for="search" type="text" className="nav-search" placeholder="Search" />
                        &nbsp;&nbsp;
                        <button id="search" className="nav-links-btn">
                            Search
                        </button>
                    </li>
                </ul>
                <ul className="nav-item-right">
                    <li className="nav-links">
                        <Link to="/" className="nav-links-btn">
                            Login
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
