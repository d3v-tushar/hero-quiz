import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const data = useLoaderData().data;
    return (
        <div>
            <h1 className='text-4xl my-8'>S T A T I S T I C S</h1>
            <div className='flex justify-center my-5'>
            <BarChart width={800} height={400} data={data}>
                <XAxis dataKey="name" stroke="#8884d8" />
                <YAxis />
                <Tooltip />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <Bar dataKey="total" fill="#8884d8" barSize={30} />
                <ResponsiveContainer/>
            </BarChart>
            </div>
        </div>
    );
};

export default Statistics;