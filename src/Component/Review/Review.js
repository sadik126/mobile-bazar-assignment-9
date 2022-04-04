import React, { useState } from 'react';
import Usereview from '../../Hooks/Usereview';
import Header from '../Header/Header';
import Reviewcard from '../Reviewcard/Reviewcard'

const Review = () => {
    const [reviewer, setReviewer] = Usereview();
    return (
        <div>
            <Header></Header>
            <h1 className='text-center text-4xl font-mono font-bold mt-6'>Here is our customars</h1>
            <div className='grid md:grid-cols-3 gap-3 m-8'>
                {
                    reviewer.map(review => <Reviewcard key={review.id} review={review}></Reviewcard>)
                }
            </div>
        </div>
    );
};

export default Review;