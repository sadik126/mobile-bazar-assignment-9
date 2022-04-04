import React, { useState } from 'react';
import Usereview from '../../Hooks/Usereview';
import Header from '../Header/Header';
import Reviewcard from '../Reviewcard/Reviewcard'

const Review = () => {
    const [reviewer, setReviewer] = Usereview();
    return (
        <div>
            <Header></Header>
            <h1 className='text-center text-4xl'>this is Review</h1>
            <div>
                {
                    reviewer.map(review => <Reviewcard key={review.id}></Reviewcard>)
                }
            </div>
        </div>
    );
};

export default Review;