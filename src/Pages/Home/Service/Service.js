import React from 'react';
import './Service.css'

const Service = ({ service }) => {
    const { name, img, description, price, id } = service;
    // const navigate = useNavigate();
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h2>This is service:{name}</h2>
            <p>Price:{price}</p>
            <p><small>{description}</small></p>
        </div>
    );
};

export default Service;