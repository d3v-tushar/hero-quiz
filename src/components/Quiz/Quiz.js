import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quiz = () => {
    const quiz = useLoaderData().data;
    const {questions, name} = quiz;
    //console.log(quiz);
    return (
        <div>
            <h1 className='text-3xl my-5'>Quiz On {name}</h1>
            <h4 className='text-xl'>Number Of Questions: {questions.length}</h4>
            <div className='grid grid-cols-1 gap-11 my-5 mx-11'>
            {
                questions.map(question => <Question key={question.id} question={question}></Question>)
            }
            </div>
        </div>
    );
};

export default Quiz;