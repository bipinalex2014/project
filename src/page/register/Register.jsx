import React from 'react'
import './register.css'
function Register() {
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form action="" className="registerForm">
                <label htmlFor="">Username</label>
                <input type="text" placeholder="Enter your username..." />
                <label htmlFor="">Email</label>
                <input type="text" placeholder="Enter your email..." />
                <label htmlFor="">Password</label>
                <input type="text" placeholder="Enter your password..." />
                <button className="registerButton">Register</button>
            </form>
            <button className="registerLoginButton">Login</button>
        </div>
    )
}

export default Register
