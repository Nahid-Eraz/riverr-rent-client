import React, { useEffect, useState } from 'react';
import batman from '../../../images/p1.png';
import ema from '../../../images/p2.png';
import superman from '../../../images/p3.png';
import Testimonial from '../Testimonial/Testimonial';


const Testimonials = () => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('http://localhost:5005/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    })

    return (
        <div className="testimonials my-5 py-5">
           <div className="container text-center">
               <h1 className="text-warning">Testimonials</h1>
               <div className="card-deck mt-5">
                    {
                        reviews.map(testimonial => <Testimonial testimonial={testimonial} key={testimonial.name}/>)
                    }
                </div>
           </div>
       </div>
    );
};

export default Testimonials;