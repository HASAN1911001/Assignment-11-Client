import React, { useEffect, useState } from 'react';

const MyServiceRow = ({ order, handleDelete }) => {
    const { _id, serviceName, customer, price, service, } = order;
    const [orderService, setorderService] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/orders/${service}`)
            .then(res => res.json())
            .then(data => setorderService(data));
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
                                orderService?.img && 
                                <img src={order.photoURL} alt="Avatar" />}
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customer}</div>
                    </div>
                </div>
            </td>
            <td>
                {serviceName}
                <br />
                <span className="badge badge-ghost badge-sm">${price}</span>
            </td>
            

        </tr>
    );
};

export default MyServiceRow;