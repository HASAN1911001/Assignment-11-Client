import React from 'react';

const Speciality = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://www.freepnglogos.com/uploads/chef-png/png-psd-download-chef-cook-vector-illustration-14.png" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <div className=''>
                        <h1 className='text-center text-6xl font-bold mt-20'>We Believe in Delicious</h1>
                        <h1 className='text-center text-6xl font-bold'> & Elegent Food</h1>
                    </div>
                    <div className='flex m-10'>
                    <figure className='m-4'><img src="https://templatekits.themewarrior.com/cooked/wp-content/uploads/sites/17/2021/03/content2-h.jpg" /></figure>
                    <figure className='m-4'><img src="https://templatekits.themewarrior.com/cooked/wp-content/uploads/sites/17/2021/03/content1-h.jpg" className="max-w-sm rounded-lg shadow-2xl" /></figure>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Speciality;