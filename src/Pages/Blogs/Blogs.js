import React from 'react';
import './Blogs.css';
const Blogs = () => {
    return (
        <div className='container'>
            <h2 className='text-center text-primary mt-3'>Blogs</h2>
            <div className='border p-3 mb-4'>
                <h3>Difference between athentication and authorization?</h3>
                <p>Authentication verifies who the user is and what he can login the site. uthentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user. Authorization determines what resources a user can access. Authorization works through settings that are implemented and maintained by the organization.</p>
            </div>
            <div className='border p-3 mb-4'>
                <h3>Why are you using firebase? What other option do you have to implement authentication?</h3>
                <p>One or more then one sign-in method combination make easeier to authentication system handle, that's why I am using firebase. Another implement authentication options are <strong>okta</strong> <strong>Auth0</strong> <strong>OneLogin</strong> <strong>ForgeRock</strong></p>
            </div>
            <div className='border p-3 mb-4'>
                <h3>What other services does firbase provide other then authentication?</h3>
                <p>With <strong>authentication</strong> firebase also provide <strong>Cloud Firestore</strong> <strong>Cloud Function</strong> <strong>Hosting</strong> <strong>Cloud Storage</strong> <strong> Google Analytics</strong> <strong>Predictions</strong> <strong>Cloud Messaging</strong> <strong>Dynamic Links</strong> <strong>Remote Config</strong></p>
            </div>
        </div>
    );
};

export default Blogs;