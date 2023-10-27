import React from "react";
import "../assets/CSS/LawFirm.css"
import "../assets/CSS/Home.css"

export default function LawFirmComponent() {
    return (
        <div className="law-main">
            <div className="law-sub-div">
                <p className="law-font-yellow">What makes us different </p>
                <h4 className="law-font-white">Why choose our law firm?</h4>
            </div>
            <div className="law-main law-sub">
                <div className="law-left">
                    <h3 className="law-font-yellow">95%</h3>
                    <p className="law-font-white">Thanks to our skills and commitment, our law firm achieves a high degree of efficiency in resolving cases.</p>
                    <div>
                        <button className="home-button">Book a free consultation</button>
                    </div>
                </div>
                <div className="law-center"></div>
                <div className="law-right">
                    <div className="law-right-first">
                        <h3 className="law-font-yellow">10+</h3>
                        <p className="law-font-white">Years of experience is the solid foundation on which we base our law firm.</p>
                    </div>
                    <div className="law-bottom"></div>
                    <div className="law-right-first">
                        <h3 className="law-font-yellow">+ 500</h3>
                        <p className="law-font-white">More than 500 satisfied clients are the result of our excellent legal services</p>
                    </div>
                </div>

            </div>
        </div>
    )
}