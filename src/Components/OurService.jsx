import React from "react";
import Image from "./Image";


function OurService(){
    return(<div className="our-services">
            <div className="our-service-before-hr"><span>Our Services</span></div>
            <hr></hr>
            <div className="our-service-cont">
            <div className="our-service-section">
                <Image src="./images/icons/ship.svg" height="40" width="40"/>
                <div className="our-sevice-content-box">
                <div className="our-service-content-head"><span>Worldwide Delivery</span></div>
                <div className="our-service-content-cond"><span>For Order Over ₹8000</span></div>
                </div>
            </div>
            <div className="our-service-section">
                <Image src="./images/icons/rocket.svg" height="40" width="40"/>
                <div className="our-sevice-content-box">
                <div className="our-service-content-head"><span>Next Day Delivery</span></div>
                <div className="our-service-content-cond"><span>Indian Orders Only</span></div>
                </div>
            </div>
            <div className="our-service-section">
                <Image src="./images/icons/call.svg" height="40" width="40"/>
                <div className="our-sevice-content-box">
                <div className="our-service-content-head"><span>Best Online Support</span></div>
                <div className="our-service-content-cond"><span>Hours: 5AM - 12PM</span></div>
                </div>
            </div>
            <div className="our-service-section">
                <Image src="./images/icons/back-arrow.svg" height="40" width="40"/>
                <div className="our-sevice-content-box">
                <div className="our-service-content-head"><span>Return Policy</span></div>
                <div className="our-service-content-cond"><span>Easy and Free Return</span></div>
                </div>
            </div>
            <div className="our-service-section">
                <Image src="./images/icons/ticket.svg" height="40" width="40"/>
                <div className="our-sevice-content-box">
                <div className="our-service-content-head"><span>30% Money Back</span></div>
                <div className="our-service-content-cond"><span>For Order Over ₹10000</span></div>
                </div>
            </div>
            </div>
        </div>);
}

export default OurService;