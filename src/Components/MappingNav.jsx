import React from "react";
import Stock from "./Stock";


function MappingLeft(){
    return(
        <div className="stock-container has-scroll-bar">
            <Stock src="./images/icons/dress.svg" name="DRESS & FROCK" quantity="53"/>
            <Stock src="./images/icons/coat.svg" name="WINTER WEAR" quantity="58"/>
            <Stock src="./images/icons/glasses.svg" name="GLASSES & LENS" quantity="68"/>
            <Stock src="./images/icons/shorts.svg" name="SHORTS & JEANS" quantity="84"/>
            <Stock src="./images/icons/tee.svg" name="T-SHIRTS" quantity="35"/>
            <Stock src="./images/icons/jacket.svg" name="JACKET" quantity="16"/>
            <Stock src="./images/icons/watch.svg" name="WATCH" quantity="27"/>
            <Stock src="./images/icons/hat.svg" name="HAT & CAPS" quantity="39"/>
        </div>
    );
}


export default MappingLeft;