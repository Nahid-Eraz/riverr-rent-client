import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import FooterCol from '../FooterCol/FooterCol'
import './Footer.css';

const Footer = () => {
    const noNamed = [
        { name: "H#0 (Riverr Corp Tower),Road #00", link: "//google.com/map" },
        { name: "Motijheel, Dhaka, Bangladesh", link: "//google.com/map" }
        
    ]

    const company = [
        { name: "About", link: "/About" },
        { name: "Project", link: "/Project" },
        { name: "Our Team", link: "/our-team" },
        { name: "Terms Condition", link: "/terms-condition" },
        { name: "Submit Listing", link: "/submit-listing" }
    ]

    const quickLinks = [
        { name: "Quick Links", link: "/quick-links" },
        { name: "Rentals", link: "/rentals" },
        { name: "Sales", link: "/sales" },
        { name: "Contact", link: "/contact" },
        { name: "Our blog", link: "/our-blog" }
    ]

    const aboutUs = [
        { name: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, quisquam."}
    ]

    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"."} menuItems={noNamed} />
                    <FooterCol key={2} menuTitle="Company" menuItems={company} />
                    <FooterCol key={3} menuTitle="Quick Links" menuItems={quickLinks} />
                    <FooterCol key={4} menuTitle="About us" menuItems={aboutUs}>
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//twitter.com"><FontAwesomeIcon className="icon" icon={faTwitter} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                            <li className="list-inline-item"><a href="//linkedin.com"><FontAwesomeIcon className="icon" icon={faLinkedin} /></a></li>
                            <li className="list-inline-item"><a href="//youtube.com"><FontAwesomeIcon className="icon" icon={faYoutube} /></a></li>
                        </ul>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>

    );
};

export default Footer;