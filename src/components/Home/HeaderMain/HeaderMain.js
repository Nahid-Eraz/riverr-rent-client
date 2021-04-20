import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../../../images/img 1.jpg'
import image2 from '../../../images/img 2.jpg'
import image3 from '../../../images/img 3.jpg'

const HeaderMain = () => {
    const handleRent = () => {
        alert('Select one of our service first')
    }
    return (
        <div id="carouselExampleFade" class="carousel slide carousel-fade mt-4 ms-4" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-4 offset-md-1">
                            <h1 className="mb-4">Just Rent</h1>
                            <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita praesentium eveniet nostrum corporis id quos.</p>
                            <Link onClick={handleRent} className="btn btn-main mb-4" to="">Rent Now</Link>
                        </div>
                        <div className="col-md-6 img-fluid">
                            <img src={image1} class="d-block w-100" alt="..." />
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-6 img-fluid">
                            <img src={image3} class="d-block w-100" alt="..." />
                        </div>
                        <div className="col-md-4 offset-md-1">
                            <h1 className="mb-4">Anytime</h1>
                            <p className="text-secondary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi aperiam et at laborum voluptatum sit!</p>
                            <Link onClick={handleRent} className="btn btn-main mb-4" to="">Rent Now</Link>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-4 offset-md-1">
                            <h1 className="mb-4">Anywhere</h1>
                            <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem neque rerum consequatur aliquid ut ad!</p>
                            <Link onClick={handleRent} className="btn btn-main mb-4" to="">Rent Now</Link>
                        </div>
                        <div className="col-md-6 img-fluid">
                            <img src={image2} class="d-block w-100" alt="..." />
                        </div>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default HeaderMain;