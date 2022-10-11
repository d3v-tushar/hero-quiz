import React from 'react';

const Question = ({question, indx}) => {
    const handleAnswers = option =>{
        const correctAns = question.correctAnswer;
        if(option === correctAns){
            alert('hoise')
        }
        else{
            alert('hoy nai')
            }
    }
    const {options} = question;
    return (
        <div className="card bg-gray-800 shadow-xl">
            <div className="card-body items-center text-center">
                <p>Question No: {indx + 1}</p>
                <h2 className="card-title my-3">{question.question}</h2>
                <div className="card-actions grid md:grid-cols-2 sm:grid-cols-1 gap-8">
                {
                     options.map((option, indx) => <div onClick={() => handleAnswers(option)} key={indx} className="card md:w-96 md:h-24 sm:w-full grid items-center px-3 glass shadow-xl image-full nav sm:flex-row sm:justify-center sm:justify-items-center">
                            <p>({indx +1})  {option}</p>
                   </div>)
                }
                </div>
            </div>
        </div>
    );
};

export default Question;