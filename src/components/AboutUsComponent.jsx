import React from "react";
import lenovo from "../assets/Images/lenovo.png"
import "../assets/CSS/AboutUs.css"
import about from "../assets/Images/About.png"
function AboutUsComponent() {
    const repeatCount = 7;
    return (
        <div className="about-mainbar" >
            <div className="about-main">
                {Array.from({ length: repeatCount }, (_, index) => (
                    <img className="about-lenovo" src={lenovo} />
                ))}
            </div>
            <div className="about-flex-sub">
            
            <div className="about-left">
                <h6 className="about-h6">About us</h6>
                <h4 className="about-h4"> A few words
                    about our law firm</h4>
                <p className="about-p">Trust, modernity, success. Our law firm builds relationships based on trust and security. We act quickly, ensuring satisfaction and comfort. We are your partner in business, removing legal obstacles to succes</p>
                <button className="about-button">More information about the law firm</button>
            </div>
            <div>
                <img className="about-image" src={about}/>
            </div>
            </div>
        </div>
    )
}
export default AboutUsComponent;