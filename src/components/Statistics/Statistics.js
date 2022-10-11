import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const Statistics = () => {
    const data = useLoaderData().data;
    const data2 = [
        {name: 'Page A', uv: 400, pv: 2800, amt: 2800},
        {name: 'Page B', uv: 270, pv: 2800, amt: 2800},
        {name: 'Page C', uv: 200, pv: 2800, amt: 2800},
        {name: 'Page D', uv: 300, pv: 2800, amt: 2800},
        {name: 'Page E', uv: 350, pv: 2800, amt: 2800},
];
    return (
        <div>
            <h1 className='text-4xl my-8'>This is Statistics</h1>
            <p className='text-xl'>Under Development</p>
            <div className='flex justify-center my-5'>
            <BarChart width={800} height={400} data={data}>
                <XAxis dataKey="name" stroke="#8884d8" />
                <YAxis />
                <Tooltip />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <Bar dataKey="total" fill="#8884d8" barSize={30} />
            </BarChart>
            </div>
        </div>
    );
};

export default Statistics;