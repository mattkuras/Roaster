import React from "react";
// import TinderCard from "react-tinder-card";
import { TiThumbsOk } from "react-icons/ti";
import { HiThumbDown } from "react-icons/hi";
import "./Card.css";
import Axios from 'axios'

const Card = (props) => {


  const sendLike = () => {
    Axios.post('/like')
    .then(resp => {
      console.log(resp)
    })
  }
  const sendDislike = () => {
    Axios.post('/dislike')
    .then(resp => {
      console.log(resp)
    })
  }

  return (
    <div className="card-container">
      <div className="tinder-card">
        <span>{props.name}</span>
        <span id="dislike-button" onClick={sendDislike}>
          <HiThumbDown />
        </span>
        <span id="like-button" onClick={sendLike}>
          <TiThumbsOk />
        </span>
      </div>
    </div>
  );
};

export default Card;
