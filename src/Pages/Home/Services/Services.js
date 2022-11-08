import React from 'react';

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
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl m-4">
                    <figure><img src="https://templatekits.themewarrior.com/cooked/wp-content/uploads/sites/17/2021/03/menu-2.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Corporate Dinner
                        </h2>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl m-4">
                    <figure><img src="https://templatekits.themewarrior.com/cooked/wp-content/uploads/sites/17/2021/03/menu-4.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Social Events
                        </h2>
                    </div>
                </div>
            </div>
            <div className='grid place-content-center mb-20'>
                <button className="btn btn-wide btn-warning">CHOSE PAKAGE</button>
            </div>
        </div>
    );
};

export default Services;