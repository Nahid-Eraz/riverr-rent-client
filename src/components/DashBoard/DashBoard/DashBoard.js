import React, { useEffect, useState } from 'react';
import OrderListTable from '../OrderListTable/OrderListTable';
import Sidebar from '../Sidebar/Sidebar';

const DashBoard = () => {
    const [ordersList, setOrdersList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5005/allBookings')
            .then(res => res.json())
            .then(data => setOrdersList(data))
    },[])

    return (
        <div>
            <div className="container-fluid row">
                <Sidebar></Sidebar>
                <div className="col-md-10 p-4 pe-5">
                    <h2 className="text-center mt-3">Order List</h2>
                    <OrderListTable ordersList={ordersList}></OrderListTable>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;