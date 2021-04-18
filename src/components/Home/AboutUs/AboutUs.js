import React from 'react';
import best from '../../../images/best.jpg';

const AboutUs = () => {
    return (
        <div>
            <div className="text-center mt-5 pt-5">
                <h1>Why You Choose <span className="text-warning">Us</span></h1>
            </div>
            <div className="row d-flex align-items-center m-5">
                <div className="col-md-6 img-fluid">
                    <img src={best} class="d-block w-100" alt="..." />
                </div>
                <div className="col-md-4 offset-md-1 bg-main p-5">
                    <h2 className="mb-4">We Believe in <span className="text-warning">SSS</span> <br /> <span className="text-warning">S</span>atisfaction, <span className="text-warning">S</span>afety & <span className="text-warning">S</span>ecurity</h2>
                    <p className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem quaerat rerum, quis quasi doloremque nihil vitae, quo, consectetur obcaecati repellat asperiores officia. Debitis similique ipsum voluptatibus repellat magni dignissimos quasi.</p>
                    <h4 className="mt-4" >With you help and trust we reached more then <br/> <span className="text-warning">55+</span> districts <br/> & <br/> <span className="text-warning">60000+</span> Users</h4>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;