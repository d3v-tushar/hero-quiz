import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const data = useLoaderData().data;
    return (
        <div className='grid justify-items-center'>
            <div className="card md:w-8/12 glass shadow-xl image-full my-7 grid justify-center">
            <div className="card-body">
                <h2 className="text-4xl">STATITICS</h2>
                <p className='mx-4'>For many people, statistics means numbers—numerical facts, figures, or information. Statistics is about data. Data consists of information about statistical variables. There are two types of variables: Quantitative variables are variables that can be measured or described by values, such as height. Categorical variables have values that are categories, such as type of pet. The data for these variables are usually counts or frequencies of the numbers for each category.</p>
                <div className='grid justify-items-center justify-center my-5'></div>
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
        </div>
    );
};

export default Statistics;