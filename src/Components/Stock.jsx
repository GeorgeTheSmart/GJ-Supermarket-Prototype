import React from "react";
import Image from "./Image";

function Stock(props){
    return(
            <div className="first stock">
                <div className="bg-cont"><Image className="stock-img" src={props.src} width="33" height="35" /></div>
                <div className="descrip-cont">
                    <div className="name-section"><span className="stock-item">{props.name}</span><span className="stock-quant">({props.quantity})</span></div>
                    <div className="show-all">Show All</div>
                </div>
            </div>
    )
}

export default Stock;