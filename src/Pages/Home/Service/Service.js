import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { name, img, description, price, id } = service;
    const navigate = useNavigate();

    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`);
    }

    return (
        <div className='service p-4'>
            <img className='service-img' src={img} alt="" />
            <h3>{name}</h3>
            <p>Price:{price}</p>
            <p><small>{description}</small></p>
            <button onClick={() => navigateToServiceDetail(id)} className='btn btn-primary rounded-pill'>Booking {name}</button>
        </div>
    );
};

export default Service;