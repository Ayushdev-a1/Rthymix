import React, { useState } from 'react';
import Navbar from './Navbar';
import Song from './Song';
import SongDp from '../asset/logo1.png'; // Placeholder song image
import { AiFillHome } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { LuLibrary } from "react-icons/lu";
import { TbPremiumRights } from "react-icons/tb";
import { CiHeart } from "react-icons/ci";
import { IoPlay } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { IoPauseSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const songs = [
        { songName: 'Tum hi ho', artist: 'Arijit Singh', songDp: SongDp },
        { songName: 'Song 2', artist: 'Artist 2', songDp: SongDp },
        { songName: 'Song 3', artist: 'Artist 3', songDp: SongDp },
    ];
    const navigation = useNavigate();
    const [currentSong, setCurrentSong] = useState(null);
    const [like, setLike] = useState(false);
    const [playing, setPlaying] = useState(false);

    // Function to handle song selection
    const handleSongSelect = (song) => {
        setCurrentSong(song);
    };
    const played = () => {
        if (!currentSong) {
          // If no song is currently playing, either play the last song or the first one in the list
          setCurrentSong(songs[songs.length - 1] || songs[0]); // Play the last song or first if no last
        }
        setPlaying(!playing); // Toggle playing state
      };
    // Function to navigate to PlayStation page
    const moveToPlayStation = () => {
        if (currentSong) {
            navigation('/playstation', { state: currentSong });
        }
    };
    const liked = () => {
        setLike(!like);
    };
    return (
        <div className="homeContainer">
            <div className="navbar">
                <Navbar />
            </div>
            <div className="contentSection">
                <Song onSongSelect={handleSongSelect} />
            </div>
            <div className="bottomNavigator">
                <div className="PlayerControllers">
                {currentSong ? (
                        <div className="songDescription" onClick={moveToPlayStation}>
                            <img src={currentSong.songDp} alt={currentSong.songName}/>
                            <span className="SongName">
                                <h4>{currentSong.songName}</h4>
                                <h5>{currentSong.artist}</h5>
                            </span>
                        </div>
                    ) : (
                        <p>No song playing</p>
                    )}
                    <div className="controllers">
                        {like ? (
                            <FaHeart onClick={liked} style={{ background: 'transparent' }} />
                        ) : (
                            <CiHeart onClick={liked} style={{ background: 'transparent' }} />
                        )}
                        {playing ? (
                            <IoPauseSharp onClick={played} style={{ background: 'transparent' }} />
                        ) : (
                            <IoPlay onClick={played} style={{ background: 'transparent' }} />
                        )}
                    </div>
                </div>
                <div className="navigationBar">
                    <ul>
                        <li>
                            <AiFillHome /> <span>Home</span>
                        </li>
                        <li>
                            <CiSearch onClick={() => navigation('/discover')} /> <span>Search</span>
                        </li>
                        <li>
                            <LuLibrary /> <span>Your Library</span>
                        </li>
                        <li>
                            <TbPremiumRights />
                            <span>Premium</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
