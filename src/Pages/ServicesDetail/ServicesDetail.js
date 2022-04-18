import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServicesDetail = () => {
    const { serviceId } = useParams();

    return (
        <div className='container'>
            <h2 className='text-center text-primary m-4'>Your consultant id:{serviceId}</h2>
            <div className='row'>
                <div className="col-md-6 p-5">
                    <p>To understand the vital role a career counselor or a career coach / career mentor plays in an individual career decision process. A counselor facilitates the decision, interprets the assessment results and often acts as a bridge between a decision maker and parents/family in reaching practical and suitable choice(s). Similarly a career coach , mentors a professional. The need for the counselors, career coaching professionals and mentors is for a research based, comprehensive career counselling and mentoring framework which can help them provide consistent and accurate guidance.</p>
                    <p>The Tucareers' Beacon career guidance framework is based on the latest in research, is the right career mentoring solution for school and college counselors, career coaches and career mentors and other vocational and guidance experts.</p>
                </div>
                <div className="col-md-6">
                    <img className='p-4 mx-5 img-fluid' src="https://www.tucareers.com/sites/all/themes/tucareers_boot/img/tree.png" alt="" />

                </div>


            </div>


            <div className='mx-auto text-center'>
                <Link to='/checkout'>
                    <button className='btn btn-primary'>Procced checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServicesDetail;