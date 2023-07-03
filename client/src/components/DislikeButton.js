import React, { useState } from "react";
import "./DislikeButton.css";
import axios from "axios";
import { ReactComponent as Avatar1 } from '../assets/dislike-svgrepo-com.svg';

const DislikeButton = ({ streamer }) => {
  const [dislikes, setDislikes] = useState(streamer.downvotes);

  const handleClick = () => {
    const data = {
      vote: 'downvote',
    };

    axios.put(`http://localhost:5000/api/streamers/${streamer._id}/downvote`, data)
      .then(response => {
        // Handle the response data
        console.log('PUT request successful:', response.data);
      })
      .catch(error => {
        // Handle the error
        console.error('Error making PUT request:', error);
      });

    setDislikes(dislikes + 1);
  };

  return (
    <button className="Btn-dis" onClick={handleClick}>
      <span className="leftContainer-dis">
        
          <Avatar1 />
        <span className="dislike">Dislike</span>
      </span>
      <span className="dislikeCount">{dislikes}</span>
    </button>
  );
};

export default DislikeButton;
