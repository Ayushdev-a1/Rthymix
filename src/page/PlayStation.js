import React from 'react';
import { useLocation } from 'react-router-dom';

export default function PlayStation() {
  const location = useLocation();
  const { songName, artist, songDp } = location.state || {}; // Get the song data passed through the state

  return (
    <>
      <div className="PlayerComponent">
        <div className="songBanner">
          <img src={songDp} alt={songName} className="banner" />
        </div>
        <div className="songInfo">
          <h4>{songName}</h4>
          <h5>{artist}</h5>
        </div>
        <div className="timeline">
          <div className="progressBar">
            <div className="progress"></div>
          </div>
          <div className="timeDisplay">
            <span>0:00</span>
            <span> / 0:00</span>
          </div>
        </div>
        <div className="options">
          <button>Add to Playlist</button>
          <button>Share</button>
        </div>
      </div>
    </>
  );
}
