import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className='about container'>
            <h2 className='text-center text-primary mt-4'>About Me</h2>
            <div className="row mt-5">
                <div className="col-sm-12 col-md-6">
                    <img className='img-fluid' src="https://scontent.fdac80-1.fna.fbcdn.net/v/t39.30808-6/265814423_1510901442613978_4009265013498902365_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=174925&_nc_ohc=m7fohJ5YxdIAX9SUgTh&_nc_ht=scontent.fdac80-1.fna&oh=00_AT8iFUc2TWHGi4zUDCaiFGoM1GWYn0uBS_MOjkjW6tfTUg&oe=6262E4C8" alt="" />
                </div>
                <div className="col-sm-12 col-md-6 mt-5 p-5">
                    <p>Hey Shima is here,

                        I am a frontend developer. I can easily build your website. Leading photo editor with lots of
                        experience in background removing and photo retouching and I believe the relevance of a user-centric
                        design depends on how intricate, scrupulous and unambiguous is the user research propelling the
                        design.</p>
                    <p>My aim has always been to build a website that looks professional, responsive with fast loading speed
                        and SEO Friendly that makes satisfy client</p>
                    <p>I want to make myself a web developer that any organization can't reject when I apply there. </p>
                    <p>My goal as web developer is to make the web a better place for all of us. I would try to develop
                        beautiful, eye-catching, accessible websites that serve their
                        purpose.</p>

                </div>
            </div>
        </div>
    );
};

export default About;