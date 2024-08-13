import React from "react";
import Image from "./Image";

function LeftNextSection(props){
    return(
                <div className="left-main">
                <div className="left-cont">
                    <Image className="left-sec-img" src={props.src} width="60" height="60" />
                    </div>
                <div className="left-descrip-cont">
                    <div className="left-sec-name-section">
                        <span className="left-sec-name">{props.name}</span>
                        </div>
                    <div className="left-sec-price">
                        <span className="offer-price">{props.offerPrice}</span>
                        <span className="old-price">{props.oldPrice}</span>
                    </div>
                </div>
                </div>
    );
}
export default LeftNextSection;