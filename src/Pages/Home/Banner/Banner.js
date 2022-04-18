import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100 vh-100"
                    src="https://as2.ftcdn.net/v2/jpg/02/84/26/39/1000_F_284263912_z40ZSFoC0gyTBAXrxyIRB0EI6HsnfZcU.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h2 className='text-capitalize'>If opportunity doesn't knock, build a door</h2>
                    <p>Find out what you like doing best, and get someone to pay you for doing it</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 vh-100"
                    src="https://img.freepik.com/free-photo/girl-is-reading-book-cafe_169016-6309.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h2 className='text-capitalize'>Find new life changing ideas with us</h2>
                    <p>Everything you need to succeed is already inside you, you just have to access your inner-power and make it happen.</p>


                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 vh-100"
                    src="https://as2.ftcdn.net/v2/jpg/02/84/26/39/1000_F_284263912_z40ZSFoC0gyTBAXrxyIRB0EI6HsnfZcU.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h2 className='text-capitalize'>Chase your dream to be your thanking</h2>
                    <p>
                        Everything you need to succeed is already inside you – you just have to access your inner-power and make it happen.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;