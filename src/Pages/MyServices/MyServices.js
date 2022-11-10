import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/Authprovider/Authprovider';
import MyServiceRow from './MyServiceRow';

const MyServices = () => {
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user?.email])


    return (
        <div className='m-20'>
            {
                orders.length?
                <h2 className="text-5xl text-center">You have {orders.length} Orders</h2>
                :
                <h2 className='text-5xl text-center m-20'>No orders were added</h2>
            }
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                            </th>
                            <th>User</th>
                            <th>Service</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <MyServiceRow
                                key={order._id}
                                order={order}
                            ></MyServiceRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyServices;