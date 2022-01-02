import React from 'react'
import './sidebar.css'
function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">About Me</span>
                <img className="sidebarImage" src="https://images.pexels.com/photos/8505220/pexels-photo-8505220.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos itaque ratione reiciendis facere cupiditate, optio repellat, magnam odit, adipisci vero nihil consectetur quisquam! Distinctio aperiam, amet reiciendis molestiae quibusdam corrupti!
                </p>
            </div>
            <div className="sidebarItem">
                <div className="sidebarTitle">CATEGORIES</div>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Sport</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Cinema</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <div className="sidebarTitle">FOLLOW US</div>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
