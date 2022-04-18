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
                    <h3>Search</h3>
                    <p>College</p>
                    <p>Courses and Title</p>
                    <p>Jobs and Internships</p>
                </div>
                <div className='col-sm-6 col-md-3 col-lg-3'>
                    <h3>Explor</h3>
                    <p>Paths and Clusters</p>
                    <p>Job Families</p>
                    <p>Occupations</p>
                </div>
                <div className='col-sm-6 col-md-3 col-lg-3'>
                    <h3>Partner</h3>
                    <p>Counsellors/Schools</p>
                    <p>Colleges/
                        universities
                    </p>
                    <p>Industry</p>
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