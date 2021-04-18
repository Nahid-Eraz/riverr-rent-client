import React from 'react';
import service from '../../../images/service.jpg';
import rentTruck from '../../../images/rt.jpg';
import rentDriver from '../../../images/rd.jpg';
import repairCenter from '../../../images/sc.jpg';
import emergencyMechanic from '../../../images/dm.jpg';
import productDelivery from '../../../images/dp.jpg';
const Projects = () => {
    return (
        <div className="container">
            <h1 className="text-center">Our <span className="text-warning">Projects</span></h1>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div className="row d-flex align-items-center">
                            <div className="col-md-4 offset-md-1">
                                <h1 className="mb-4"><span className="text-warning">24/7</span><br /> Service Center</h1>
                                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita praesentium eveniet nostrum corporis id quos.</p>
                            </div>
                            <div className="col-md-6 img-fluid">
                                <img src={service} class="d-block w-100" alt="..." />
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div className="row d-flex align-items-center">
                            <div className="col-md-4 offset-md-1">
                                <h1 className="mb-4"><span className="text-warning">Rent</span> <br /> Driver</h1>
                                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita praesentium eveniet nostrum corporis id quos.</p>
                            </div>
                            <div className="col-md-6 img-fluid">
                                <img src={rentDriver} class="d-block w-100" alt="..." />
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div className="row d-flex align-items-center">
                            <div className="col-md-4 offset-md-1">
                                <h1 className="mb-4"><span className="text-warning">Vast</span> <br /> Repair Center</h1>
                                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita praesentium eveniet nostrum corporis id quos.</p>
                            </div>
                            <div className="col-md-6 img-fluid">
                                <img src={repairCenter} class="d-block w-100" alt="..." />
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div className="row d-flex align-items-center">
                            <div className="col-md-4 offset-md-1">
                                <h1 className="mb-4"><span className="text-warning">Parcel</span><br /> Products</h1>
                                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita praesentium eveniet nostrum corporis id quos.</p>
                            </div>
                            <div className="col-md-6 img-fluid">
                                <img src={productDelivery} class="d-block w-100" alt="..." />
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div className="row d-flex align-items-center">
                            <div className="col-md-4 offset-md-1">
                                <h1 className="mb-4"><span className="text-warning">Emergency</span><br />Car Mechanic Sent <br /> At Your Home</h1>
                                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita praesentium eveniet nostrum corporis id quos.</p>
                            </div>
                            <div className="col-md-6 img-fluid">
                                <img src={emergencyMechanic} class="d-block w-100" alt="..." />
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div className="row d-flex align-items-center">
                            <div className="col-md-4 offset-md-1">
                                <h1 className="mb-4"><span className="text-warning">Rent</span> <br />Truck</h1>
                                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita praesentium eveniet nostrum corporis id quos.</p>
                            </div>
                            <div className="col-md-6 img-fluid">
                                <img src={rentTruck} class="d-block w-100" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Projects;