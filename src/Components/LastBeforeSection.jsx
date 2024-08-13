import React from "react";
import Image from "./Image";

function LastSection(){
    return(
        <div className="last-before-section">
        <div><Image className="cta-banner" src="./images/cta-banner.jpg" width="700" height="400"/></div>
            <div className="white-content">
                <div className="cont-disc">
                    <span>25% DISCOUNT</span>
                    </div>
                <div className="summer">
                    <span>Summer</span>
                    </div>
                <div className="collection">
                    <span>Collection</span>
                    </div>
                <div className="starting">
                    <span>Starting @ ₹799</span>
                    </div>
                <div className="shop-now">
                    <span>SHOP NOW</span>
                </div>
            </div>                
        </div>
    )
}

export default LastSection;