import React, { useEffect, useState } from 'react';

const ReviewRow = ({ review, handleDelete, handleStatusUpdate }) => {
    const { _id, serviceName, phone, customer, price, service, status } = review;
    const [ReviewService, setReviewService] = useState({})

    useEffect(() => {
        fetch(`https://b6a11-service-review-server-side-hasan-1911001-hasan1911001.vercel.app/services/${service}`)
            .then(res => res.json())
            .then(data => setReviewService(data));
    }, [service])

    

    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className='btn btn-ghost'>X</button>
                <button  className='btn btn-ghost'>Edit</button> 
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded-full w-8 h-8">
                            {
                                ReviewService?.img && 
                                <img src={review.photoURL} alt="Avatar" />}
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customer}</div>
                        <div className="text-sm opacity-50">{phone}</div>
                    </div>
                </div>
            </td>
            <td>
                {serviceName}
                <br />
                <span className="badge badge-ghost badge-sm">${price}</span>
            </td>
            <td>{review.message}</td>
            

        </tr>
    );
};

export default ReviewRow;