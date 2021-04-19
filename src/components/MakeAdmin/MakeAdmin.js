import React from 'react';
import Sidebar from '../DashBoard/Sidebar/Sidebar';

const MakeAdmin = () => {
    return (
        <div>
            <div className="container-fluid row">
                <Sidebar></Sidebar>
                <div className="col-md-10 p-4 pr-5">
                    <h1>make admin</h1>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;