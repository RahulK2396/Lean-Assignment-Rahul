import React from 'react'
import "../assets/CSS/Footer.css"
import socialmedia from '../assets/Images/socialmedia.svg'

export function FooterComponent() {
    return (
        <div className='footer-main'>
            <div className='footer-flex'>
                <div>
                    <div>snazzylawer</div>
                    <div>help@snazzylawyer.com</div>
                    <div>+48 601 908 812</div>
                </div>
                <div className='specialties-flex'>
                    <div>

                        <h5>Specialties</h5>
                        <div>Family Law</div>
                        <div>Criminal Law</div>
                        <div>Civil Law</div>
                        <div>Labour Law</div>
                        <div>Real estate Law</div>
                    </div>
                    <div>
                        <div>Compensation</div>
                        <div>Succession matters</div>
                        <div>Consumer bankruptcy</div>
                        <div>Drafting and reviewing contracts</div>
                    </div>
                </div>
                <div>
                <h5>Resources</h5>
                        <div>FAQ</div>
                        <div>Blog</div>
                        <div>Kontakt</div>
                      
                </div>
            </div>
            <div className='footer-flex'>
                <p>©SnazzylawyerAll Right Reserved</p>
                <div className='footer-sm-remove'><img src={socialmedia}/></div>
                <div className='footer-sm-remove'><p>Privacy policy</p></div>
            </div>
        </div>
    )
}