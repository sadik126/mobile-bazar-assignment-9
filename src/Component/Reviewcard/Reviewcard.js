import React from 'react';
import './Reviewcard.css'

const Reviewcard = (props) => {
    const { name, img, nationality, review, details } = props.review;
    return (
        <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 card flex flex-col">
            <a href="#" className='imgcard'>
                <img className="rounded-t-lg" src={img} alt="" />
            </a>
            <div className="p-5 mt-5 flex flex-col items-center justify-center ">
                <div className='flex flex-col items-center justify-center'>
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                    </a>
                    <p className="pb-9 font-normal text-gray-700 dark:text-gray-400">{details}</p>

                    <a href="#" className="inline-flex items-center py-2 my-8 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" id='card'>
                        Review : {review}

                    </a>



                </div>


            </div>
        </div>


    );
};

export default Reviewcard;