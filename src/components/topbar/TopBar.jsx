import React from 'react'
import './topbar.css'
import profilePic from '../assets/smile.jpg'
import { Link } from 'react-router-dom'
function TopBar() {
    return (
        <div className="top">
          <div className="topLeft">
              <i className="topIcon fab fa-facebook-square"></i>
              <i className="topIcon fab fa-twitter-square"></i>
              <i className="topIcon fab fa-twitter-square"></i>
              <i className="topIcon fab fa-instagram-square"></i>
        </div>
          <div className="topCenter">
              <ul className="topList">
                  <Link className="topListItem" to="/">Home</Link>
                  <Link className="topListItem" to="/single">About</Link>
                  <Link className="topListItem" to="/write">Write</Link>
                  <Link className="topListItem" to="/settings">Settings</Link>
                  <Link className="topListItem" to="/login">login</Link>
                  <Link className="topListItem" to="/register">Register</Link>
                  {/* <li className="topListItem">Home</li>
                  <li className="topListItem">About</li>
                  <li className="topListItem">Contact</li>
                  <li className="topListItem">Write</li>
                  <li className="topListItem">Logout</li> */}
              </ul>
          </div>
          <div className="topRight">
                <Link className="topListItem" to="/settings"><img className="topImage" src={profilePic} alt="" /></Link>
              
              <i class="topSearchIcon fas fa-search"></i>
          </div>
        </div>
    )
}

export default TopBar
