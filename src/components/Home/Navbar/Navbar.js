import React from 'react';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-warning">
            <div class="container-fluid">
                <div>
                    <a class="navbar-brand" href="#"><h1>Riverr Ride</h1></a>
                </div>
                <div class="collapse navbar-collapse " id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a class="nav-link me-5 active " aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link me-5" href="#">Features</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link me-5" href="#">Pricing</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link me-5" href="#">Disabled</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;