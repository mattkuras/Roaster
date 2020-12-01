import React from "react";
// import TinderCard from "react-tinder-card";
// import {FaRegCheckCircle} from 'react-icons/fa'
import "./Card.css";

const Card = (props) => {
  return (
    <div className='card-container'>
      <div className="tinder-card">
        <span>{props.name}</span>
        {/* <FaRegCheckCircle/> */}
      </div>
    </div>
  );
};

export default Card;
