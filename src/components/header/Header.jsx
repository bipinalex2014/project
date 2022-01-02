import React from 'react'
import './header.css'
function Header(){
    return(
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitlesm">React & Node</span>
                <span className="headerTitlelg">Blog</span>
            </div>
            <img className="headerImg" src="https://images.pexels.com/photos/103880/pexels-photo-103880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
        </div>
    )
}

export default Header