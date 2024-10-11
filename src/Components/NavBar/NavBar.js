import React from "react"
import './NavBar.css'
// import { Link } from "react-router-dom"

 function NavBar () {

     return(
        <div className="navbar" >
            <div className="container">
            <a href="/" className="logo" ><span>L</span>UNCH-B<span>O</span>X</a>
            <div className="nav-links">
                <a href="/" className="active" >Home</a>
                <a href="/login">Login</a>
                {/* <a href="/adminlogin">Admin</a> */}
                <a href="/settings">Settings</a>
                             
            </div>
            </div>
        </div>
     )
}
export default NavBar

