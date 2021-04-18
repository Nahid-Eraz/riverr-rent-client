import React from 'react';
import './Testimonial.css';
const Testimonial = (props) => {
    const {quote,name,from ,img} = props.testimonial;
    return (
        <div className="col-md-4 text-center mt-5 card-style">
            <img style={{height:'100px'}} src={img} alt=""/>
            <h4 className="mt-3">{name}</h4>
            <h6 className="mt-3">{from}</h6>
            <p className="mt-3">{quote}</p>
        </div>
    );
};

export default Testimonial;