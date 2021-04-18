import React from 'react';
import './ServiceDetail.css';
const ServiceDetail = ({service}) => {
    return (
        <div className="col-md-4 text-center mt-3 p-4 service-style">
            <img style={{height:'100px'}} src={service.img} alt=""/>
            <h4 className="mt-3">{service.category}</h4>
            <h6 className="text-warning mt-3">$ {service.charge}</h6>
            <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, ullam. Nemo quia quidem nam mollitia.</p>
        </div>
    );
};

export default ServiceDetail;