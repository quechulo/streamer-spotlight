import React from 'react';

function StreamerDetails({ streamer }) {
  return (
    <div>
      <h2>Streamer Details</h2>
      <p>ID: {streamer.id}</p>
      <p>Name: {streamer.name}</p>
    </div>
  );
}

export default StreamerDetails;
