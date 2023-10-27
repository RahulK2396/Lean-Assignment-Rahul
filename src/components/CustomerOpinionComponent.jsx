import React from "react";
import "../assets/CSS/LawFirm.css"
import "../assets/CSS/Speciallation.css"
import { customerOpinion } from "../Constant";
import twitter from "../assets/Images/twitter.svg"
import "../assets/CSS/Customer.css"
import "../assets/CSS/Home.css"

export default function CustomerOpinionComponent() {
    return (
        <div className="special-main opinion-main">
            <div>
                <p className="law-font-yellow">Opinions about us</p>
                <h3 className="law-font-black">What our customer say</h3>
                <h3 className="law-font-black">about us</h3>
            </div>
            <div className="special-content-main customer-main">
                {
                    customerOpinion.map((item) => (
                        <div className="customer-content-main">
                            <div className="lower-content">
                                <div className="image-content-customer">
                                <img src={item.image} />
                                <div>
                                    <span>Jerome Bell</span>
                                    <p>@Jerome_Bell</p>
                                </div>
                                </div>
                                <img src={twitter} />
                            </div>
                            <div >
                                <p>Lorem ipsum dolor sit amet consectetur. Parturient leo aliquet ligula e nim lacinia vitae massa convallis felis. Ante eu et viverra suscipit in. Nam a integer libero lorem eget tempor pharetra. Lectus etiam consequat at vitae mauris.</p>
                            </div>
                        </div>

                    ))
                }

            </div>
            <div>
                        <button className="home-button">Read more about the opinions</button>
                    </div>
            </div>
            )
}