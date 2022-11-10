import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    
    useEffect( () =>{
        fetch('https://b6a11-service-review-server-side-hasan-1911001.vercel.app/services')
        .then(res =>res.json())
        .then(data => setServices(data))
    }, []);

    return (
        <div className='m-10'>
            <div className='text-center my-10'>
                <h1 className='text-center text-6xl font-bold mt-20'>Available Services</h1>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;




















// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';



// const Services = () => {

//     const [services, setServices] = useState([]);
    
//     useEffect( () =>{
//         fetch('https://b6a11-service-review-server-side-hasan-1911001-hasan1911001.vercel.app/services')
//         .then(res =>res.json())
//         .then(data => setServices(data))
//     }, []);

//     console.log(services)

//     return (
//         <div>
//             <div className=''>
//                 <h1 className='text-center text-6xl font-bold mt-20'>Available Services</h1>
//             </div>
//             <div className='flex m-20'>
//                 <div className="card bg-base-100 shadow-xl m-4">
//                     <figure><img src={services[0].img} alt="Shoes" /></figure>
//                     <div className="card-body">
//                         <h2 className="card-title">
//                         {services[0].title}
//                         </h2>
//                         <p>
//                         {services[0].description}
//                         </p>
//                         <p>
//                             Price: {services[0].price}
//                         </p>
//                         <Link to='/services' className="btn btn-wide btn-warning">View Details</Link>
//                     </div>
//                 </div>

//                 <div className="card bg-base-100 shadow-xl m-4">
//                     <figure><img src={services[1].img} alt="Shoes" /></figure>
//                     <div className="card-body">
//                         <h2 className="card-title">
//                         {services[1].title}
//                         </h2>
//                         <p>
//                         {services[1].description}
//                         </p>
//                         <p>
//                             Price: {services[1].price}
//                         </p>
//                         <Link to='/services' className="btn btn-wide btn-warning">View Details</Link>
//                     </div>
//                 </div>

//                 <div className="card bg-base-100 shadow-xl m-4">
//                     <figure><img src={services[2].img} alt="Shoes" /></figure>
//                     <div className="card-body">
//                         <h2 className="card-title">
//                         {services[2].title}
//                         </h2>
//                         <p>
//                         {services[2].description}
//                         </p>
//                         <p>
//                             Price: {services[2].price}
//                         </p>
//                         <Link to='/services' className="btn btn-wide btn-warning">View Details</Link>
//                     </div>
//                 </div>
//             </div>

//             <div className='flex m-20'>
//                 <div className="card bg-base-100 shadow-xl m-4">
//                     <figure><img src={services[3].img} alt="Shoes" /></figure>
//                     <div className="card-body">
//                         <h2 className="card-title">
//                         {services[3].title}
//                         </h2>
//                         <p>
//                         {services[3].description}
//                         </p>
//                         <p>
//                             Price: {services[3].price}
//                         </p>
//                         <Link to='/services' className="btn btn-wide btn-warning">View Details</Link>
//                     </div>
//                 </div>

//                 <div className="card bg-base-100 shadow-xl m-4">
//                     <figure><img src={services[4].img} alt="Shoes" /></figure>
//                     <div className="card-body">
//                         <h2 className="card-title">
//                         {services[4].title}
//                         </h2>
//                         <p>
//                         {services[4].description}
//                         </p>
//                         <p>
//                             Price: {services[4].price}
//                         </p>
//                         <Link to='/services' className="btn btn-wide btn-warning">View Details</Link>
//                     </div>
//                 </div>

//                 <div className="card bg-base-100 shadow-xl m-4">
//                     <figure><img src={services[5].img} alt="Shoes" /></figure>
//                     <div className="card-body">
//                         <h2 className="card-title">
//                         {services[5].title}
//                         </h2>
//                         <p>
//                             {services[5].description}
//                         </p>
//                         <p>
//                             Price: {services[5].price}
//                         </p>
//                         <Link to='/services' className="btn btn-wide btn-warning">View Details</Link>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Services;