import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Review from './Review';

const Details = () => {
    const data = useLoaderData()
    return (
        <div>
            <div>
                <h1 className='text-5xl'>This id details page</h1>
            </div>
            <Review>

            </Review>
        </div>
    );
};

export default Details;