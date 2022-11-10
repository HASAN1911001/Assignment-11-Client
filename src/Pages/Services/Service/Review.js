import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Context/Authprovider/Authprovider';

const Review = () => {
    const { _id, title, price } = useLoaderData();
    const { user } = useContext(AuthContext);
    const {displayName, email, photoURL} = user;

    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const message = form.message.value;
        const review = {
            service: _id,
            serviceName: title,
            price,
            customer: displayName,
            email,
            photoURL,
            message
        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                //authorization: `Bearer ${localStorage.getItem('genius-token')}`
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged){
                    alert('Reviewed placed successfully')
                    form.reset();
                    
                }
            })
            .catch(er => console.error(er));
    }

    return (
        <div className='m-20'>
            <form onSubmit={handleReview}>
                <h2 className="text-3xl text-center m-10">Give your feedback on {title}</h2>
                <textarea name="message" className="textarea textarea-bordered h-24 w-full p-10 m-10" placeholder="Your Message" required></textarea>
                <div className='flex justify-center m-10'>
                    <input className='btn-wide btn-warning' type="submit" value="Place Your Review" />
                </div>
            </form>
        </div>
    );
};

export default Review;