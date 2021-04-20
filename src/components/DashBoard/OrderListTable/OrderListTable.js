import React from 'react';

const OrderListTable = ({ ordersList }) => {
    return (
        <table className="table table-borderless bg-main mt-5">
            <thead>
                <tr>
                    <th className="text-secondary text-left" scope="col">#No</th>
                    <th className="text-secondary" scope="col">Name</th>
                    <th className="text-secondary" scope="col">Category</th>
                    <th className="text-secondary" scope="col">Charge</th>
                    <th className="text-secondary" scope="col">Phone</th>
                    <th className="text-secondary" scope="col">Email</th>
                    <th className="text-secondary" scope="col">Address</th>
                </tr>
            </thead>
            <tbody>
                {
                  ordersList.map((orderList, index) => 
                        
                    <tr>
                        <td>{index + 1}</td>
                        <td>{orderList.name}</td>
                        <td>{orderList.category}</td>
                        <td>$ {orderList.charge}</td>
                        <td>{orderList.phone}</td>
                        <td>{orderList.email}</td>
                        <td>{orderList.address}</td>
                    </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default OrderListTable;