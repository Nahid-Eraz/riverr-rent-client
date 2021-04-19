import React from 'react';
import navIcon from '../../../images/nav.png';
const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-warning">
            <div class="container-fluid">
                <div>
                    <a class="navbar-brand" href="#"><h2>Riverr Rent  <img style={{height:'80px'}} src={navIcon} alt=""/></h2></a>
                </div>
                <div class="collapse navbar-collapse " id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a class="nav-link me-5 active " aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link me-5" href="#">Our Portfolio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link me-5" href="#">Our Team</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link me-5" href="#">Login</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;