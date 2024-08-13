import React from "react";
import Image from "./Image";
import { fourthSection} from "../data";
import LeftNextSection from "./LeftNextSection";
import FiveStars from "./FiveStars";

function SecondSection(props){

    function createSection(element){
        return(
        <LeftNextSection
            key={element.key}
            src={element.src}
            name={element.name}
            offerPrice={element.offerPrice}
            oldPrice={element.oldPrice}
        />);
    };

    return (
        <div className="next-left">
            <div className="next-sub-left">
                <div className="left-title"><span>BEST SELLERS</span></div>
                {fourthSection.map(createSection)}
                    <div className="testimonial-head"><span>Testimonial</span></div>
                    <hr className="testimon-hr"></hr>
                    <div className="testimonial-sec">
                    <div className="testimonial-img"><Image src="./images/testimonial-1.jpg"/></div>
                    <div className="testimonial-name">ALAN DOE</div>
                    <div className="quotation-sym"><Image src="./images/icons/quotes.svg" height="30" width="30"/></div>
                    <div className="testimonial-descript"><p>I’ve never had such a seamless shopping experience! The product descriptions are spot-on, and the skincare items I bought have completely transformed my routine.</p></div>
                    </div>
                    <div className="testimonial-sec">
                    <div className="testimonial-img"><Image src="./images/testimonial-2.png"/></div>
                    <div className="testimonial-name testminial-2">JOHN D</div>
                    <div className="quotation-sym"><Image src="./images/icons/quotes.svg" height="30" width="30"/></div>
                    <div className="testimonial-descript"><p>I was hesitant to order makeup online, but this site made it so easy. The color swatches were accurate, and I loved the personalized recommendations. Plus, the packaging was beautiful and eco-friendly!</p></div>

                </div>
            </div>
            <div className="deal-cont">
            <div><span className="deal-cont-head">Deal of The Day</span></div>
            <hr className="horizontal-rule"></hr>
            <div className="deal-sides has-scroller">
                <div className="deal-left">
                    <Image src="./images/products/shampoo.jpg" height="350px" width="390px"/></div>
                <div className="deal-right">
                    <div className="deal-right-head"><span>SHAMPOO , CONDITIONER & FACEWASH PACKS</span></div>
                    <div className="deal-right-descript"><span>Old Spice is the best known company in this world for external appearances.</span></div>
                    <div className="deal-right-price-sec">
                        <span className="offer-price">₹399</span>
                        <span className="old-price">₹999</span>    
                    </div>
                    <div className="deal-right-submit">
                        <button type="submit">ADD TO CART</button>
                    </div>
                    <div className="deal-right-stock-qty">
                        <span className="deal-right-sold">ALREADY SOLD : 20</span>
                        <span className="deal-right-available">AVAILABLE : 40</span>
                    </div>
                    <div className="grey-scale">
                        <div className="pink-scale"></div>
                        </div>
                    <div className="motivat">
                        <span>HURRY UP! OFFER ENDS IN : </span>
                    </div>
                </div>
                
                <div className="deal-left">
                    <Image src="./images/products/jewellery-1.jpg" height="350px" width="390px"/></div>
                <div className="deal-right">
                    <div className="deal-right-head"><span>ROSE GOLD DIAMONDS EARINGS</span></div>
                    <div className="deal-right-descript"><span>This is the finest diamond earings in this world, imported from South Africa and crafted in India.</span></div>
                    <div className="deal-right-price-sec">
                        <span className="offer-price">₹99,999</span>
                        <span className="old-price">₹199,999</span>    
                    </div>
                    <div className="deal-right-submit">
                        <button type="submit">ADD TO CART</button>
                    </div>
                    <div className="deal-right-stock-qty">
                        <span className="deal-right-sold">ALREADY SOLD : 15</span>
                        <span className="deal-right-available">AVAILABLE : 40</span>
                    </div>
                    <div className="grey-scale">
                        <div className="pink-scale"></div>
                        </div>
                    <div className="motivat">
                        <span>HURRY UP! OFFER ENDS IN : </span>
                    </div>
                </div> 


            </div>
            </div>
        </div>
    );
}

export default SecondSection;