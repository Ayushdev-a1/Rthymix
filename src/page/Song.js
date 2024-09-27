import React from 'react'
import SongDp from '../asset/logo1.png';
export default function Song({ onSongSelect }) {
  const songs = [
    { songName: 'Tum hi ho', artist: 'Arijit Singh', songDp: SongDp },
    { songName: 'Song 2', artist: 'Artist 2', songDp: SongDp },
    { songName: 'Song 3', artist: 'Artist 3', songDp: SongDp },
    { songName: 'Song 4', artist: 'Artist 4', songDp: SongDp },
    { songName: 'Song 5', artist: 'Artist 5', songDp: SongDp },
  ];
  return (
    <>
    <div className="songComponent">
      <div className="recomended">
        <p>Recommended:</p>
        <ul>
          <li>Song 1</li>
          <li>Song 2</li>
          <li>Song 3</li>
        </ul>
      </div>
      <div className="RecentListen">
          <p>Recently Played</p>
          <ul>
            {songs.map((song, index) => (
              <li key={index} onClick={() => onSongSelect(song)}>
                <img className="SongBanner" src={song.songDp} alt="song banner" />
                <span>
                  <p className="songName">{song.songName}</p>
                  <p className="artist">{song.artist}</p>
                </span>
              </li>
            ))}
          </ul>
        </div>
      <div className="Mostplayed">
        <p>Most Played:</p>
        <ul>
          <li>Song 1</li>
          <li>Song 2</li>
          <li>Song 3</li>
        </ul>
      </div>
      <div className="PopularOfAlltime">
        <p>Popular of All Time:</p>
        <ul>
          <li>Song 1</li>
          <li>Song 2</li>
          <li>Song 3</li>
        </ul>
      </div>
      <div className="PopularOfAlltime">
        <p>Popular of All Time:</p>
        <ul>
          <li>Song 1</li>
          <li>Song 2</li>
          <li>Song 3</li>
        </ul>
      </div>
    </div>
    </>
  )
}
