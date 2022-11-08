import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Showcase from '../Showcase/Showcase';

import Speciality from '../Speciality/Speciality';

const Home = () => {
    return (
        <div data-theme="" className=''>
            <Banner></Banner>
            <Services></Services>
            <Speciality></Speciality>
            <Showcase></Showcase>
        </div>
    );
};

export default Home;