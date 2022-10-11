import React from 'react';

const Question = ({question}) => {
    console.log(question);
    const {options} = question;
    return (
        <div className="card lg:card-side bg-gray-600 shadow-xl">
            <div className="card-body items-center text-center">
                <h2 className="card-title">{question.question}</h2>
                <div className="card-actions grid grid-cols-2 gap-8">
                {
                     options.map((option, indx) => <div key={indx} className="btn btn-primary">{option}</div>)
                }
                </div>
            </div>
        </div>
    );
};

export default Question;