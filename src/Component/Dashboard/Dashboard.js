import React from 'react';
import Header from '../Header/Header';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {

    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ];

    return (
        <div >
            <Header></Header>
            <p className='text-center text-4xl font-mono font-semibold'>this is Dashboard</p>

            <div className='flex'>

                <LineChart className='mt-7' width={530} height={350} data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="sell" stroke="#8884d8" />
                    <Line type="monotone" dataKey="investment" stroke="#82ca9d" />
                    <Line type="monotone" dataKey="revenue" stroke="red" />
                </LineChart>


                <BarChart className='mt-7' width={730} height={350} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="sell" fill="black" />
                    <Bar dataKey="investment" fill="#82ca9d" />
                    <Bar dataKey="revenue" fill="red" />
                </BarChart>

            </div>



        </div>
    );
};

export default Dashboard;