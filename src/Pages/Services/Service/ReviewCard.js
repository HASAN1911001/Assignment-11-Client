import React from 'react';

const ReviewCard = ({review}) => {

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{review.customer}</h2>
                <p>{review.message}</p>
                <div className="card-actions justify-end">
                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={review.photoURL} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;