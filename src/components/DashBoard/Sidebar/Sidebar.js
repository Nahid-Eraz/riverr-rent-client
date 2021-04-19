import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faFolderPlus, faGripHorizontal, faUserPlus, faCommentDots, faPenNib } from '@fortawesome/free-solid-svg-icons';
import {  faFileAlt } from '@fortawesome/free-regular-svg-icons'

const Sidebar = () => {
    return (
        <div className="sidebar bg-warning d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height:"100vh"}}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/dashboard/orderlist" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Order List</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/addservice" className="text-white">
                        <FontAwesomeIcon icon={faFolderPlus} /> <span>Add Service</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/makeadmin" className="text-white">
                        <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/text-white" className="text-white">
                        <FontAwesomeIcon icon={faPenNib} /> <span>Book</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/bookinglist" className="text-white" >
                      <FontAwesomeIcon icon={faFileAlt} /> <span>Booking List</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/review" className="text-white" >
                      <FontAwesomeIcon icon={faCommentDots} /> <span>Review</span>
                    </Link>
                </li>
            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;