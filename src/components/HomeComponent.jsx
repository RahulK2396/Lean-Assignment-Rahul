import React from "react";
import homeImage from "../assets/Images/homeImage.png"
import "../assets/CSS/Home.css"

function HomeComponent() {
    return (
        <div  className="home-main">
            <div className="home-content">
                <span className="home-header">Overcome legal abstacles to your
                    <span className="home-success">success!</span></span>
                <p className="home-pcontent">
                    Law without obstacles for your success. Professional support to help you overcome legal difficulties and achieve your goals.
                </p>
                <div>
                <button className="home-button">Book a free consultation</button>
                </div>
            </div>
            <div className="image-div" >
                <img className="home-image" src={homeImage}/>
            </div>
        </div>
    )
}
export default HomeComponent;