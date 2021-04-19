import React from 'react';
import { useHistory } from 'react-router';
import './ServiceDetail.css';
const ServiceDetail = (props) => {
    const {name, imageURL, charge, key} = props.service;

    const history = useHistory();
    const selectOrder = (key) => {
        const url = (`/dashboard/book/${key}`)
        history.push(url);
    }
    return (
        <div onClick={() => selectOrder(key)} className="col-md-4 text-center mt-3 p-4 service-style">
            <img style={{height:'100px'}} src={imageURL} alt=""/>
            <h3 className="mt-3">{name}</h3>
            <h4 className="text-warning mt-3">$ {charge}</h4>
            <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, ullam. Nemo quia quidem nam mollitia.</p>
        </div>
    );
};

export default ServiceDetail;