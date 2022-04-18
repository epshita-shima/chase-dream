import React from 'react';
import './Checkout.css';

const Checkout = () => {
    const handleCheckout = event => {
        event.preventDefault();
        alert('success checkout')

    }
    return (
        <div className='checkout-form'>
            <h2 className='text-primary text-center m-4'>Your checkout</h2>
            <form onSubmit={handleCheckout}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="" placeholder='Your Name' />
                <label htmlFor="">Address</label>
                <input type="text" name="name" id="" placeholder='Your Address' />
                <input type="submit" value="Submit" />
            </form>

        </div>
    );
};

export default Checkout;