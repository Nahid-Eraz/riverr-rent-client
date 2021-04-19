import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import navIcon from '../../images/nav.png';
const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-warning">
            <div class="container-fluid">
                <div>
                    <Link class="navbar-brand" href="/"><h2>Riverr Rent  <img style={{height:'80px'}} src={navIcon} alt=""/></h2></Link>
                </div>
                <div class="collapse navbar-collapse " id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <Link class="nav-link me-5 active " aria-current="page" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link me-5" to="#">Our Portfolio</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link me-5" to="#">Our Team</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link me-5" to="/login">Login</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link me-5" to="/login">{loggedInUser.name}</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;