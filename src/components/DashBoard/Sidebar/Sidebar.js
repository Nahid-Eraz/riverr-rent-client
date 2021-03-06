import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faFolderPlus, faGripHorizontal, faUserPlus, faCommentDots, faPenNib } from '@fortawesome/free-solid-svg-icons';
import {  faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { UserContext } from '../../../App';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="sidebar bg-warning d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height:"100vh"}}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/dashboard/orderList" className="text-dark">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Order List</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/addService" className="text-dark">
                        <FontAwesomeIcon icon={faFolderPlus} /> <span>Add Service</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/makeAdmin" className="text-dark">
                        <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/book/${key}" className="text-dark">
                        <FontAwesomeIcon icon={faPenNib} /> <span>Book</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/bookingList" className="text-dark" >
                      <FontAwesomeIcon icon={faFileAlt} /> <span>Booking List</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/review" className="text-dark" >
                      <FontAwesomeIcon icon={faCommentDots} /> <span>Review</span>
                    </Link>
                </li>
            </ul>
            <div>
                {loggedInUser.name}
                <br/>
                <br/>
                <Link to="/" className="text-dark"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Back to Home</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;