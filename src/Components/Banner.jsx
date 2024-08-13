import React from "react";
import Image from "./Image";

function Banner(props){
    return(
        <div class="first-banner banner">
        <div className="siding-banner">
            <div class="mySlides fade">
                <Image src="./images/banner-1.jpg" className="banner1"/>
            </div>
            <div className="banner-text-cont">
                <div className="banner-trending pink-trending"><span>Trending Item</span></div>
                <div className="banner-normal"><span>WOMEN'S LATEST FASHION SALE</span></div>
                <div className="banner-starting"><span>Starting @ ₹799</span></div>
                <div><button className="banner-shop-now">SHOP NOW</button></div>
            </div>
            <div class="mySlides fade">
                <Image src="./images/banner-2.jpg" className="banner1"/>
            </div>
            <div className="banner-text-cont txt-2">
                <div className="banner-trending white-trending"><span>Trending Item</span></div>
                <div className="banner-normal"><span>WOMEN'S LATEST FASHION SALE</span></div>
                <div className="banner-starting"><span>Starting @ ₹799</span></div>
                <div><button className="banner-shop-now purple-shop-now">SHOP NOW</button></div>
            </div>
        </div>
        </div>

    );
}

export default Banner;