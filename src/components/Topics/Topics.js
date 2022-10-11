import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Topics = () => {
    const topics = useLoaderData().data;
    console.log(topics);
    return (
        <div className='md:flex grid gap-8 my-8 justify-center'>
            {
                topics.map(topic => <Topic key={topic.id} topic={topic}></Topic>)
            }
        </div>
    );
};

export default Topics;