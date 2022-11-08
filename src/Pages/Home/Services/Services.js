import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <div>
            <div className=''>
                <h1 className='text-center text-6xl font-bold mt-20'>Plan Your Event With Our</h1>
                <h1 className='text-center text-6xl font-bold'>Services</h1>
            </div>
            <div className='flex m-20'>
                <div className="card bg-base-100 shadow-xl m-4">
                    <figure><img src="https://templatekits.themewarrior.com/cooked/wp-content/uploads/sites/17/2021/03/menu-3.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Weading Reception
                        </h2>
                        <p>
                            Best food service for all kind weading reception
                        </p>
                        <p>
                            Price: Start from $999
                        </p>
                        <Link to='/services' className="btn btn-wide btn-warning">View Details</Link>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl m-4">
                    <figure><img src="https://templatekits.themewarrior.com/cooked/wp-content/uploads/sites/17/2021/03/menu-2.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Corporate Dinner
                        </h2>
                        <p>
                            Best food service for your corporate dinner
                        </p>
                        <p>
                            Price: Start from $999
                        </p>
                        <Link to='/services' className="btn btn-wide btn-warning">View Details</Link>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl m-4">
                    <figure><img src="https://templatekits.themewarrior.com/cooked/wp-content/uploads/sites/17/2021/03/menu-4.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Social Events
                        </h2>
                        <p>
                            Best food service for your social events
                        </p>
                        <p>
                            Price: Start from $999
                        </p>
                        <Link to='/services' className="btn btn-wide btn-warning">View Details</Link>
                    </div>
                </div>
            </div>
            <div className='grid place-content-center mb-20'>
                <Link to='/services' className="btn btn-wide btn-warning">See All</Link>
            </div>
        </div>
    );
};

export default Services;