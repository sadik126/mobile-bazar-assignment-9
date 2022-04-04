import React, { useState } from 'react';
import Usereview from '../../Hooks/Usereview';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import Review from '../Review/Review';
import Reviewcard from '../Reviewcard/Reviewcard';

const Home = () => {
    const [reviewer, setReviewer] = Usereview();
    const [visible, setVisible] = useState(3);


    console.log(reviewer, visible)

    const data = reviewer.slice(0, visible);

    const Showdata = () => {
        setVisible(reviewer.length)
    }

    let command;
    if (data.length > 3) {
        command = <p>here all</p>
    }
    else {
        command = <button onClick={Showdata} type="button" className=" focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5  py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Show more</button>
    }




    return (
        <div>
            <Header></Header>
            <Banner></Banner>

            <h1 className='text-center text-5xl font-bold font-mono'>Here is Our customars</h1>
            <div className='flex flex-col justify-center items-center'>
                <div className='grid md:grid-cols-3 gap-3 m-8'>
                    {

                        data.map(review => <Reviewcard key={review.id} review={review}></Reviewcard>)
                    }

                </div>


                {


                    command

                }


            </div>


        </div>
    );
};

export default Home;