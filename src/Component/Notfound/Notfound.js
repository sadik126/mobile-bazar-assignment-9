import React from 'react';
import Header from '../Header/Header';

const Notfound = () => {
    return (
        <div>
            <Header></Header>
            <h3 className='text-center text-5xl mt-16'>404 page not found</h3>
            <p className='text-center'>We are sorry but the page you are looking for does not exist.</p>
        </div>
    );
};

export default Notfound;