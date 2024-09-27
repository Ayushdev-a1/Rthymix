import React from 'react'
import welcome from '../asset/welcome.png'

export default function Welcome() {
    const move = () => {
        window.location.href = '/login'
    }
    const loggedin = false;
    return (
        <>
            <div className="welcome">
                <img src={welcome} alt="welcome" />
                <span>
                    <h1>
                        Music Lover
                    </h1>
                    <p>Explore new tunes & create playlist with esae</p>
                </span>
                {loggedin ? (
                    <>
                    Loading....................................
                    </>) :
                    (<>
                        <button className='getStarted' onClick={move}>Get Started</button>
                    </>)}
            </div>
        </>
    )
}
