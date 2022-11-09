import React from 'react';
import { Link } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ServiceCard = ({ service }) => {
    const { _id, img, price, title, description } = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">

            <PhotoProvider>
                <div className="foo">
                    <PhotoView  src={img}>
                        <img src={img} alt="" />
                    </PhotoView>
                </div>
            </PhotoProvider>


            <div className="card-body">
                <h2 className="card-title font-bold text-3xl">{title}</h2>
                <p className='text-2xl font-semibold'>{description}</p>
                <p className='text-2xl text-orange-600 font-semibold'>Price: {price}</p>
                <div className="card-actions justify-center">
                    <Link to={`/details/${_id}`} className="btn btn-wide btn-warning">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;