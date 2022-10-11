import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ({topic}) => {
    const {name, logo, total, id} = topic;
    return (
        <div className="card w-96 bg-base-400 shadow-xl">
  <figure className='bg-gray-400'><img src={logo} alt="Shoes" /></figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Quiz Topic: {name}
    <span className="indicator-item badge badge-secondary">{total}</span>
    </h2>
    <p>Total Questions To Answer: {total}</p>
    <div className="card-actions text-justify justify-between items-center">
    <div className="rating">
        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
    </div>
      <Link to={`/topic/${id}`}><button className='btn btn-primary'>Start Quiz</button></Link> 
    </div>
  </div>
</div>
    );
};

export default Topic;