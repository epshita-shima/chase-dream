import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServicesDetail = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h2>Welcom to service detail:{serviceId}</h2>
            <div className='mx-auto'>
                <Link to='/checkout'>
                    <button className='btn btn-primary'>Procced checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServicesDetail;