import React from 'react';
import './Footer.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='mt-5'>
            <div className='row bg-primary text-white p-3 text-center'>
                <div className='col-sm-6 col-md-3 col-lg-3 '>
                    <h3>About</h3>
                    <p>About</p>
                    <p>Contact us</p>
                    <p>FAQs</p>
                </div>
                <div className='col-sm-6 col-md-3 col-lg-3'>
                    <h3>About</h3>
                    <p>About</p>
                    <p>Contact us</p>
                    <p>FAQs</p>
                </div>
                <div className='col-sm-6 col-md-3 col-lg-3'>
                    <h3>About</h3>
                    <p>About</p>
                    <p>Contact us</p>
                    <p>FAQs</p>
                </div>
                <div className='col-sm-6 col-md-3 col-lg-3'>
                    <h3>About</h3>
                    <p>About</p>
                    <p>Contact us</p>
                    <p>FAQs</p>
                </div>
            </div>
            <div className='row p-3' style={{ background: '#007fff' }}>
                <div className='col-md-12 text-center '>
                    <p className='text-white'>Copyright @ {year}</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;