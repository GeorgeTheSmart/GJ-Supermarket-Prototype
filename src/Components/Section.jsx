import React from "react";
import Image from "./Image";

function Section(props){
    return(
            <div className="first stock">
                <div className="sec-cont">
                    <Image className="sec-img" src={props.src} width="80" height="80" />
                    </div>
                <div className="descrip-cont">
                    <div className="sec-name-section">
                        <span className="sec-name">{props.name}</span>
                        </div>
                    <div className="sec-category">{props.category}</div>
                    <div className="sec-price">
                        <span className="offerPrice">{props.offerPrice}</span>
                        <span className="oldPrice">{props.oldPrice}</span>
                    </div>
                    <div className="new-prod-but-cont sec-button">
                        <button className="new-prod-but">ADD TO CART</button>
                    </div>
                </div>
            </div>
    );
}

export default Section;