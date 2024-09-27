import React, { useState } from 'react'
import DP from '../asset/logo.png';
import { FaSearch } from "react-icons/fa";
import Post from './Post';
import { useNavigate } from 'react-router-dom';
import { IoArrowBackCircleOutline } from "react-icons/io5";
export default function Discover() {
  const navigate = useNavigate();
  const [like, setLike] = useState(false);
  const liked = () => {
    setLike(!like);
  }
  const movetoHome = () => {
    navigate("/")
  }

  return (
    <>
      <div className="discoverConatainer">
        <div className="dicoverNav">
          <span><IoArrowBackCircleOutline title='Home' onClick={movetoHome} /></span>
          <h1>Discover</h1>
          <img src={DP} alt="UserDp" className="UserDp" onClick={movetoHome} />
        </div>
        <div className="searchBar">
          <FaSearch style={{ background: "white", color: "black" }} /> <input type="text" placeholder="Search for artists, songs, or albums" />
        </div>
        <div className="exploreMore">
          <div className="ExploreHeading">
            <h4>Explore More</h4>
          </div>
          <Post />
        </div>
      </div>
    </>
  )
}
