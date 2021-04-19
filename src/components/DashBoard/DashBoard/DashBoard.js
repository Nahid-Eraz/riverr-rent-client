import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const DashBoard = () => {
    return (
        <div>
            <div className="container-fluid row">
                <Sidebar></Sidebar>
                <div className="col-md-10 p-4 pe-5">
                    <h1>order list</h1>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;