import React from "react";
import Image from "./Image";

function BlogSection(){
    return(
        <div className="outer-blog-container">
            <div className="blog-cont">
                <div className="blog-image">
                <Image src="./images/blog-1.jpg" width="280" height="150"/>
                </div>
                <div className="blog-title"><span>Fashion</span></div>
                <div className="blog-content">
                    <span>
                    Unveil the secrets of effortless elegance
                    </span>
                </div>
                <div className="blog-details">
                    <span>By Mr. George / Aug 06, 2024</span>
                </div>
            </div>
            <div className="blog-cont">
            <div className="blog-image">
                <Image src="./images/blog-2.jpg" width="280" height="150"/>
            </div>
                <div className="blog-title">
                    <span>Clothes</span>
                </div>
                <div className="blog-content">
                    <span>
                    Discover the looks that are defining the season
                    </span>
                </div>
                <div className="blog-details">
                    <span>
                        By Mr. Musk / Aug 08, 2024
                    </span>
                </div>
            </div>
            <div className="blog-cont">
                <div className="blog-image">
                    <Image src="./images/blog-3.jpg" width="280" height="150"/>
                </div>
                <div className="blog-title">
                    <span>Shoes</span>
                </div>
                <div className="blog-content">
                    <span>
                    Make high fashion part of your everyday with our accessible luxury  
                    </span>
                </div>
                <div className="blog-details">
                    <span>
                        By Mr. Bezos / Aug 09, 2024
                    </span>
                </div>
            </div>
            <div className="blog-cont">
                <div className="blog-image">
                    <Image src="./images/blog-4.jpg" width="280" height="150"/>
                </div>
                <div className="blog-title">
                    <span>Electronics</span>
                </div>
                <div className="blog-content">
                    <span>
                    Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor
                    </span>
                </div>
                <div className="blog-details">
                    <span>
                        By Mr. Gates / Aug 10, 2024
                    </span>
                </div>
            </div>
        </div>
    )
}

export default BlogSection;