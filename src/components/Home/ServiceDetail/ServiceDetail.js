import React from 'react';
import './ServiceDetail.css';
const ServiceDetail = ({service}) => {
    return (
        <div className="col-md-4 text-center mt-3 p-4 service-style">
            <img style={{height:'100px'}} src={service.imageURL} alt=""/>
            <h3 className="mt-3">{service.name}</h3>
            <h4 className="text-warning mt-3">$ {service.charge}</h4>
            <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, ullam. Nemo quia quidem nam mollitia.</p>
        </div>
    );
};

export default ServiceDetail;