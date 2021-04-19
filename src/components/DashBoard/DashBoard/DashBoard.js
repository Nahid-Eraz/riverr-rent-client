import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const DashBoard = () => {
    return (
        <div>
            <div className="container-fluid row">
                <div>
                    <Sidebar></Sidebar>
                </div>
                {/* <div className="col-md-8">
                    <h2>input section</h2>
                </div> */}
            </div>
        </div>
    );
};

export default DashBoard;