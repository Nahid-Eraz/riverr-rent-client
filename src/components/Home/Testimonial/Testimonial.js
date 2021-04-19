import React from 'react';
import './Testimonial.css';
const Testimonial = ({testimonial}) => {
    return (
        <div className="col-md-4 text-center mt-3 p-4 card-style">
            <img className="img-fluid" style={{height:'100px'}} src={testimonial.imageURL} alt=""/>
            <h4 className="mt-3">{testimonial.name}</h4>
            <h6 className="mt-3">{testimonial.company},{testimonial.company}</h6>
            <p className="mt-3">{testimonial.quote}</p>
            
        </div>
    );
};

export default Testimonial;