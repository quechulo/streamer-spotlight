import React from "react";
import { useNavigate } from "react-router-dom";
import "./StreamerItem.css";
import LikeButton from "./LikeButton";
import DislikeButton from "./DislikeButton";

function StreamerItem({ streamer }) {
  const navigate = useNavigate();

  const handleClickStreamer = () => {
    // console.log(streamer)
    navigate(`/streamer/${streamer._id}`);
  };

  return (
    <div className="streamer-item">
      <div class="card">
        <div class="card-info">
          <div class="card-avatar"></div>
          <div class="card-title">
            {streamer.name} {streamer.surname}
          </div>
          {/* <div class="card-subtitle">CEO &amp; Co-Founder</div> */}
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
