import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <div>
            <div className=''>
                <h1 className='text-center text-6xl font-bold mt-20'>Available Services</h1>
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

            <div className='flex m-20'>
                <div className="card bg-base-100 shadow-xl m-4">
                    <figure><img src="https://templatekits.themewarrior.com/cooked/wp-content/uploads/sites/17/2021/03/menu-1.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Non Profit
                        </h2>
                        <p>
                            Best food service for non profit events
                        </p>
                        <p>
                            Price: Start from $999
                        </p>
                        <Link to='/services' className="btn btn-wide btn-warning">View Details</Link>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl m-4">
                    <figure><img src="https://png.pngtree.com/png-clipart/20210328/original/pngtree-ramadan-iftar-png-png-image_6168918.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Iftar Party
                        </h2>
                        <p>
                            Best food service for Iftar Party
                        </p>
                        <p>
                            Price: Start from $999
                        </p>
                        <Link to='/services' className="btn btn-wide btn-warning">View Details</Link>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl m-4">
                    <figure><img src="https://www.ohio.edu/sites/default/files/styles/max_650x650/public/2021-05/Feeding%20Guests%20%282%29.jpg?itok=urO4TSWA" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Academic Event
                        </h2>
                        <p>
                            Best food service for all types of academic event
                        </p>
                        <p>
                            Price: Start from $999
                        </p>
                        <Link to='/services' className="btn btn-wide btn-warning">View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;