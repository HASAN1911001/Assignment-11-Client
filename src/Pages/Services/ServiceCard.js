import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, img, price, title, description } = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold text-3xl">{title}</h2>
                <p className='text-2xl font-semibold'>{description}</p>
                <p className='text-2xl text-orange-600 font-semibold'>Price: {price}</p>
                <div className="card-actions justify-center">
                    <Link to={`/details/${_id}`} className="btn btn-wide btn-warning">View Details</Link>
                    {/* <Link to={`/checkout/${_id}`}>
                        <button className="btn btn-primary">Checkout</button>
                    </Link> */}
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;