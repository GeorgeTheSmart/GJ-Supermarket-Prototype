import React from "react";
import { firstSection, secondSection, thirdSection } from "../data";
import Section from "./Section";

function Mapping(){

    function createSection(element){
        return(
        <Section
            key={element.key}
            src={element.src}
            name={element.name}
            category={element.category}
            offerPrice={element.offerPrice}
            oldPrice={element.oldPrice}
        />);
    }

    return(
    <div className="main-sec-container sec-scroll">
        <div className="first sec-container">
            <span className="sec-head" style={{display : "block"}}>New Arrivals</span>
            <hr className="horizontal-rule"></hr>
            {firstSection.map(createSection)}
        </div>
        <div className="second sec-container">
            <span className="sec-head" style={{display : "block"}}>Trending</span>
            <hr className="horizontal-rule"></hr>
        {secondSection.map(createSection)}
        </div>
        <div className="third sec-container">
            <span className="sec-head" style={{display : "block"}}>Top Rated</span>
            <hr className="horizontal-rule"></hr>
        {thirdSection.map(createSection)}
        </div>
        

    </div>
    );
}


export default Mapping;