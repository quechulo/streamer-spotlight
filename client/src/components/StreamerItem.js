import React from "react";
import { useNavigate } from "react-router-dom";
import "./StreamerItem.css";
import LikeButton from "./LikeButton";
import DislikeButton from "./DislikeButton";

function StreamerItem({ streamer }) {
  const navigate = useNavigate();

  const handleClickStreamer = () => {
    navigate(`/streamer/${streamer._id}`);
  };

  return (
    <div className="streamer-item">
      <div className="card">
        <div className="card-info">
          <div className="card-avatar"></div>
          <div className="card-title">
            {streamer.name} {streamer.surname}
          </div>
        </div>
        <div className="card-info">
          <LikeButton streamer={streamer} />
          <DislikeButton streamer={streamer} />
        </div>
        <button className="button-check" onClick={handleClickStreamer}>
          Check me out!
        </button>
      </div>
    </div>
  );
}

export default StreamerItem;
