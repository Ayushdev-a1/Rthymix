import React, { useState } from 'react';
import DP from '../asset/logo.png';
import { FaSearch } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
export default function Post() {
    const [like , setLike ] = useState(false);
    const liked = () => {
        setLike(!like);
    }
    return (
        <>
            <div className="Post">
                <div className="postUser">
                    <img src={DP} alt="UserDp" className="UserDp" />
                    <h5>UserName</h5>
                </div>
                <div className="postImg">

                </div>
                <div className="postStatus">
                    <span className='intreaction'>{like ? (<><FaHeart onClick={liked} style={{ background: "transparent" }} /></>) : (<><CiHeart onClick={liked} style={{ background: "transparent" }} /></>)}
                        <FaShare style={{ background: "transparent" }} />
                    </span>
                    <span className="caption">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel justo ac ligula consequat suscipit. Sed vel ex et neque lobortis fermentum. Sed nec tempor velit.
                    </span>
                    <span className='postDate'>
                        yesterday
                    </span>
                </div>
            </div>
        </>
    )
}
