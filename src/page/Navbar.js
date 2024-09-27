import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const loggedin = false;
  const navigate = useNavigate();
  const moveToLogin = () => {
    navigate('/login');
  }
  return (
    <>
      <div className="navbarComponent">
         <ul>
          <span className='UserName'>A</span>
          <li>All</li>
          <li>Music</li>
          <li>Profile</li>
         </ul>
         {loggedin? (<></>):(<><div className="logingButton" onClick={moveToLogin}>🤘Listen</div></>)}
      </div>
    </>
  )
}
