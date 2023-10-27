import React from "react";
import "../assets/CSS/LawFirm.css"
import "../assets/CSS/Speciallation.css"
import "../assets/CSS/Blog.css"
import { blog } from "../Constant";

export default function BlogComponent(){
    return (
        <div className="special-main">
            <div>
                <p className="law-font-yellow">Blog</p>
                <h3 className="law-font-black">Newsroom</h3>
                    </div>
            <div className="special-content-main blog-content-main">
                {
                    blog.map((item) => (
                        <div className="blog-content">
                            <img className="blog-image" src={item.image}/>
                            <div className="lower-content blog-lower">
                                <div >
                                    <span>Criminal law </span>
                                <h3>{item.heading}</h3>
                                <p className="">Lorem ipsum dolor sit amet consectetur. Parturient leo aliquet ligula enim lacinia .</p>
                                </div>
                               
                                </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}