import React from 'react';
import Iphone from './iphone.jpg'
import './Banner.css'

const Banner = () => {
    return (

        <section className="container mx-auto sm:flex  justify-center items-center bg-white pb-32 pt-12  ">
            <div className="space-y-4 banner-text">
                <h1 className="text-5xl uppercase font-semibold">
                    <span className="text-red-700">Your next phone</span>
                    <br />
                    <span className="text-blue-900">Your best phone</span>
                </h1>
                <p>
                    Phone skills include effective communication, interpersonal skills and the ability to incorporate appropriate phone etiquette. Successful phone conversations (such as converting leads to paying customers) can depend on how well you apply your conversational techniques, how clearly you speak and how you approach engaging people you speak with. Because phone conversations can be a part of nearly any business operation, it can be important to develop these skills to showcase your expertise on your resume, during interviews and in the workplace.
                </p>
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Live demo
                    </span>
                </button>
            </div>

            <div className='img'>
                <img className="w-1/2 sm:w-full" src={Iphone} alt="" />
            </div>
        </section>

    );
};

export default Banner;


