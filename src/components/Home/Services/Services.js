import React, { useEffect, useState } from 'react';
import rent from '../../../images/rent.png'
import rent2 from '../../../images/rent2.png'
import rent3 from '../../../images/rent3.png'
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import '../../../App.css';


const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5005/services')
        .then(res => res.json())
        .then(data => setServices(data))
    })

    return (
        <div className="bg-main m-4 p-2">
            <div className="container text-center mt-5">
                <h1>Our Awesome <span className="text-warning">Services</span></h1>
            </div>
            <div className="row d-flex justify-content-center">
                <div className="w-75 row mt-4 p-5">
                    {
                        services.map(service => <ServiceDetail service={service}></ServiceDetail>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;