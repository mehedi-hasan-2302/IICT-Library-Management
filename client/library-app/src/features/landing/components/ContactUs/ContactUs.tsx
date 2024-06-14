import React from "react";

import './ContactUs.css';

export const ContactUs:React.FC = () => {
    return(
        <div className="contact-us">
            <h3>Contact Us</h3>
            <h4>Address</h4>
            <p>2nd Floor,IICT Building,SUST</p>
            <div className="contact-us-divider"> </div>
            <p>017xxxxxxxx</p>
            <div className="contact-us-divider"> </div>
            <h4>Email</h4>
            <p>iictlibrary@sust.edu</p>
        </div>
    )
}