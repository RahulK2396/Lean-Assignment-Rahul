import React from "react";
import { header } from "../Constant";
import "../assets/CSS/Header.css"

function HeaderComponent() {

    return (
        <div className="d-flex flex-row justify-content-between align-items-center header-mainbar">
            <div className="d-flex  header-bar align-items-center">
                <span className="font-details">snazzy</span><span className="align-items-center">lawyer</span>
            </div>
            <div className="d-flex flex-row justify-content-lg-around justify-content-end side-header">
                <div className="d-none d-lg-flex header-content align-items-center font-details">
                    {header.map((item) => (
                        <span>{item}</span>
                    ))}
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list hamburgerIcon d-block d-lg-none" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg>
                <button className="appointment-button font-details d-none d-lg-block">Make an appointment</button>
            </div>
        </div>
    )
}
export default HeaderComponent;