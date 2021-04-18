import React from 'react';
import Footer from '../../Footer/Footer';
import AboutUs from '../AboutUs/AboutUs';
import Header from '../Header/Header';
import JoinCommunity from '../JoinCommunity/JoinCommunity';
import Projects from '../Projects/Projects';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <AboutUs></AboutUs>
            <Projects></Projects>
            <Testimonials></Testimonials>
            <JoinCommunity></JoinCommunity>
            <Footer></Footer>
        </div>
    );
};

export default Home;