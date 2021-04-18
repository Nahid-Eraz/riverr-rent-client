import React from 'react';
import batman from '../../../images/p1.png';
import ema from '../../../images/p2.png';
import superman from '../../../images/p3.png';
import Testimonial from '../Testimonial/Testimonial';

const testimonialsData = [
    {
        quote: 'Lorem ipsum dolor sit. Hic non, qui nisi deserunt blanditiis mollitia, illo! ',
        name: 'Batman',
        from: 'DC',
        img: batman
    },
    {
        quote: 'Lorem ipsum dolor sit. Hic non, qui nisi deserunt blanditiis mollitia, illo! ',
        name: 'Ema',
        from: 'USA',
        img: ema
    },
    {
        quote: 'Lorem ipsum dolor sit. Hic non, qui nisi deserunt blanditiis mollitia, illo! ',
        name: 'Superman',
        from: 'DC',
        img: superman
    }
]
const Testimonials = () => {
    return (
        <div className="testimonials my-5 py-5">
           <div className="container text-center">
               <h1 className="text-warning">Testimonials</h1>
               <div className="card-deck mt-5">
                    {
                        testimonialsData.map(testimonial => <Testimonial testimonial={testimonial} key={testimonial.name}/>)
                    }
                </div>
           </div>
       </div>
    );
};

export default Testimonials;