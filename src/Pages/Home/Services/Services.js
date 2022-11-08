import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../../Services/ServiceCard';


const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://b6a11-service-review-server-side-hasan-1911001.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    delete services[3]
    delete services[4]
    delete services[5]


    return (
        <div>
            <div className=''>
                <h1 className='text-center text-6xl font-bold mt-20'>Plan Your Event With Our</h1>
                <h1 className='text-center text-6xl font-bold mb-20'>Services</h1>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-10'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <div className='grid place-content-center my-20'>
                <Link to='/services' className="btn btn-wide btn-warning">See All</Link>
            </div>
        </div>
    );
};

export default Services;

{/* <div className='grid place-content-center mb-20'>
<Link to='/services' className="btn btn-wide btn-warning">See All</Link>
</div> */}

{/* <div className=''>
                <h1 className='text-center text-6xl font-bold mt-20'>Plan Your Event With Our</h1>
                <h1 className='text-center text-6xl font-bold'>Services</h1>
            </div> */}