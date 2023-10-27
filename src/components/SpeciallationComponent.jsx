import React from "react";
import "../assets/CSS/LawFirm.css"
import "../assets/CSS/Speciallation.css"
import { speciallation } from "../Constant";
import arrow from "../assets/Images/arrow.svg"

export default function SpeciallationComponent() {
    return (
        <div className="special-main">
            <div>
                <p className="law-font-yellow">Speciallsation</p>
                <h3 className="law-font-black">What we do</h3>
                <p className="law-font-black special-p">Our lawyer are specialists in criminal law, civil law, commercial law, administrative law and
                    new technologies. We are not afraid of chanllenges, including consumer bankruptcy</p>
            </div>
            <div className="special-content-main">
                {
                    speciallation.map((item) => (
                        <div className="special-content">
                            <img src={item.image}/>
                            <div className="lower-content">
                                <div>
                                <span>{item.name}</span>
                                <p className="">{item.subName}</p>
                                </div>
                                <img src={arrow}/>
                                </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}