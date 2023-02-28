import React from "react";
import { CartonBoxLogo, ProfileImage, CartonLogo } from "../Images/images";
import './Navbar.css'


class Navbar extends React.Component {
    render() {
        return (
            <div className="nav-container">
                <div className="logo">
                    <img src={ CartonLogo }></img>
                </div>

                {/* <div className="search-bar">
                    <input placeholder="Search Anything..."></input>
                </div> */}
                
                <div className="profile">
                    <button>
                        <img src={ ProfileImage }></img>
                    </button>
                </div>
                
            </div>
        )
    }
}

export default Navbar;