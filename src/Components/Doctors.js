import React from 'react'
import '../Styles/Body.css';

const Doctors = (props) => {
  return (
    <div className="card">
      <img className="product--image" src={props.url} alt="doctor's photo" />
      <h2>{props.name}</h2>
      <p className="department">{props.department}</p>
      <p>{props.description}</p>
      <p>
        <button>Know More</button>
      </p>
    </div>
  )
};

export default Doctors;
