import React from 'react';
import Sidebar from '../DashBoard/Sidebar/Sidebar';

const BookingList = () => {
    return (
        <div>
            <div className="container-fluid row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 p-5 pe-5">
                    <h1>booking list</h1>
                </div>
            </div>
        </div>
    );
};

export default BookingList;