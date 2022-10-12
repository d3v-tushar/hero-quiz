import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ({topic}) => {
    const {name, logo, total, id} = topic;
    return (
        <div className="card w-96 glass shadow-xl my-8">
          <figure className='bg-gray-700'><img src={logo} alt="Shoes" /></figure>
          <div className="card-body items-center text-center">
            <div className="indicator">
              <span className="indicator-item badge badge-secondaryy">{total}</span> 
          <div className=" place-items-center"><h2 className="card-title">Quiz Topic: {name}</h2></div>
        </div>
  
          <p>Total Number of Questions: {total}</p>
        <div className="card-actions text justify-between items-center">
          <div className="rating">
            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
        </div>
          <Link to={`/topic/${id}`}><button className='btn btn-secoundary'>Start Quiz</button></Link> 
        </div>
      </div>
    </div>
    );
};

export default Topic;