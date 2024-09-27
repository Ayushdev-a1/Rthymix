import React from 'react'
import logo from '../asset/new.png'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const navigate = useNavigate()
    const MoveToRegister = () => {
        navigate('/register')
    }
    return (
        <>
            <div className="login">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <span className='heading'>
                    <h1>TuneWave</h1>
                    <p>Discover new music effortlessly</p>
                </span>

                <div className="fields">
                    <input type="text" placeholder='Username' name='Username' id='Username' />
                    <input type="password" placeholder='Password' name='Username' id='Username' />
                    <button className="login">Login</button>
                </div>
                <span className='forgotPassword'>
                    forgot password?
                </span>
                <br />
                <div className="line"></div>
                <span className='or'>or</span>
                <div className="otherOption">
                    <button>Google</button>
                    <button>Facebook</button>
                </div>
                <span className='waytoregister'>
                    New to TuneWave? <p style={{color:"blanchedalmond",cursor:"pointer"}} onClick={MoveToRegister}>Join now</p>
                </span>
            </div>
        </>
    )
}
