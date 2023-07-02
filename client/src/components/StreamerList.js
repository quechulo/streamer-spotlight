import React from 'react';
import StreamerItem from './StreamerItem';
import './StreamerList.css';

function StreamerList({ streamers }) {
  return (
    <div className="streamer-list">
      {streamers.map(streamer => (
        <StreamerItem key={streamer._id} streamer={streamer} />
      ))}
    </div>
  );
}

export default StreamerList;