import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import './settings.css'
function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <form action="" className="settingsForm">
                    <label htmlFor="">Profile Picture</label>
                    <div className="settingsPP">
                        <img className="settingsImage" src="https://images.pexels.com/photos/143577/pexels-photo-143577.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" />
                        <label htmlFor="fileInput"><i className="settingsPPIcon far fa-user-circle"></i></label>
                    <   input type="file" id="fileInput" style={{display:"none"}} />
                    </div>
                    <label htmlFor="">Username</label>
                    <input type="text" placeholder="bipin" />
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder="bipin@gmail.com" />
                    <label htmlFor="">Password</label>
                    <input type="password" />
                    <button type="submit" className="settingsSubmit">Update</button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}

export default Settings

