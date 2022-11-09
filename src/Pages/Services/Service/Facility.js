import React from 'react';

const Facility = ({facility}) => {
    console.log(facility);
    return (
        <div>
            <div className="card w-96 bg-primary text-primary-content">
                <div className="card-body">
                    <h2 className="card-title">{facility.name}</h2>
                    <p>{facility.details}</p>
                </div>
            </div>
        </div>
    );
};

export default Facility;