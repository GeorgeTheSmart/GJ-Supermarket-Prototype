import React from "react";
import { FirstNewSection, SecondNewSection, ThirdNewSection, FourthNewSection } from "../data2";
import FiveStars from "./FiveStars";
import Image from "./Image";


function MainNewSection(){
    return(
        <div className="price-list">
        <div className="new-products"><span>New Products</span></div>
        <hr className="new-products-hr"></hr>
    <div className="first-new">     
        <div className="new-prod-pri-cont">
        <div className="prod-cont-sub">
            <div className="prod-first prod-cre-sec">
            <div className={FirstNewSection[0].class}><div><span>{FirstNewSection[0].off}</span></div></div>
            <div className="new-prod-first">
                <Image className="new-prod-img-1" src={FirstNewSection[0].src1} height="160px" width="180"/>
                <Image className="new-prod-img-2" src={FirstNewSection[0].src2} height="170px" width="195"/>
            </div>
            <div className="new-prod-name"><span>{FirstNewSection[0].prodName}</span></div>
            <div className="new-prod-descp"><span>{FirstNewSection[0].prodDescp}</span></div>
            <FiveStars />
            <div className="new-prod-price">
                <span className="new-prod-offer-price">{FirstNewSection[0].offerPrice}</span>
                <span className="new-prod-old-price">{FirstNewSection[0].oldPrice}</span>
            </div>
            <div className="new-prod-but-cont">
                <button className="new-prod-but">ADD TO CART</button>
            </div>
            </div>
        </div>
    
        <div className="prod-cont-sub">
            <div className="prod-cre-sec">
            <div className={SecondNewSection[0].class}><div><span>{SecondNewSection[0].off}</span></div></div>
            <div className="new-prod-first">
                <Image className="new-prod-img-1" src={SecondNewSection[0].src1} height="160px" width="180"/>
                <Image className="new-prod-img-2" src={SecondNewSection[0].src2} height="170px" width="195"/>
            </div>
            <div className="new-prod-name"><span>{SecondNewSection[0].prodName}</span></div>
            <div className="new-prod-descp"><span>{SecondNewSection[0].prodDescp}</span></div>
            <FiveStars />
            <div className="new-prod-price">
                <span className="new-prod-offer-price">{SecondNewSection[0].offerPrice}</span>
                <span className="new-prod-old-price">{SecondNewSection[0].oldPrice}</span>
            </div>
            <div className="new-prod-but-cont">
                <button className="new-prod-but">ADD TO CART</button>
            </div>
            </div>
        </div>
        <div className="prod-cont-sub third-pro-con">
            <div className="prod-cre-sec">
            <div className={ThirdNewSection[0].class}><div><span>{ThirdNewSection[0].off}</span></div></div>
            <div className="new-prod-first">
                <Image className="new-prod-img-1" src={ThirdNewSection[0].src1} height="160px" width="180"/>
                <Image className="new-prod-img-2" src={ThirdNewSection[0].src2} height="170px" width="195"/>
            </div>
            <div className="new-prod-name"><span>{ThirdNewSection[0].prodName}</span></div>
            <div className="new-prod-descp"><span>{ThirdNewSection[0].prodDescp}</span></div>
            <FiveStars />
            <div className="new-prod-price">
                <span className="new-prod-offer-price">{ThirdNewSection[0].offerPrice}</span>
                <span className="new-prod-old-price">{ThirdNewSection[0].oldPrice}</span>
            </div>
            <div className="new-prod-but-cont">
                <button className="new-prod-but">ADD TO CART</button>
            </div>
            </div>
        </div>
    
        </div>
        <div className="prod-cont-sub fourth-pro-con">
            <div className="prod-cre-sec">
            <div className={FourthNewSection[0].class}><div><span>{FourthNewSection[0].off}</span></div></div>
            <div className="new-prod-first">
                <Image className="new-prod-img-1" src={FourthNewSection[0].src1} height="160px" width="180"/>
                <Image className="new-prod-img-2" src={FourthNewSection[0].src2} height="170px" width="195"/>
            </div>
            <div className="new-prod-name"><span>{FourthNewSection[0].prodName}</span></div>
            <div className="new-prod-descp"><span>{FourthNewSection[0].prodDescp}</span></div>
            <FiveStars />
            <div className="new-prod-price">
                <span className="new-prod-offer-price">{FourthNewSection[0].offerPrice}</span>
                <span className="new-prod-old-price">{FourthNewSection[0].oldPrice}</span>
            </div>
            <div className="new-prod-but-cont">
                <button className="new-prod-but">ADD TO CART</button>
            </div>
            </div>
        </div>
    </div>
    <div className="second-new">
        <div className="prod-cont-sub">
            <div className="prod-first prod-cre-sec">
            <div className={FirstNewSection[1].class}><div><span>{FirstNewSection[1].off}</span></div></div>
            <div className="new-prod-first">
                <Image className="new-prod-img-1" src={FirstNewSection[1].src1} height="160px" width="180"/>
                <Image className="new-prod-img-2" src={FirstNewSection[1].src2} height="170px" width="195"/>
            </div>
            <div className="new-prod-name"><span>{FirstNewSection[1].prodName}</span></div>
            <div className="new-prod-descp"><span>{FirstNewSection[1].prodDescp}</span></div>
            <FiveStars />
            <div className="new-prod-price">
                <span className="new-prod-offer-price">{FirstNewSection[1].offerPrice}</span>
                <span className="new-prod-old-price">{FirstNewSection[1].oldPrice}</span>
            </div>
            <div className="new-prod-but-cont">
                <button className="new-prod-but">ADD TO CART</button>
            </div>
            </div>
        </div>
    
    
        <div className="prod-cont-sub">
            <div className="prod-cre-sec">
            <div className={SecondNewSection[1].class}><div><span>{SecondNewSection[1].off}</span></div></div>
            <div className="new-prod-first">
                <Image className="new-prod-img-1" src={SecondNewSection[1].src1} height="160px" width="180"/>
                <Image className="new-prod-img-2" src={SecondNewSection[1].src2} height="170px" width="195"/>
            </div>
            <div className="new-prod-name"><span>{SecondNewSection[1].prodName}</span></div>
            <div className="new-prod-descp"><span>{SecondNewSection[1].prodDescp}</span></div>
            <FiveStars />
            <div className="new-prod-price">
                <span className="new-prod-offer-price">{SecondNewSection[1].offerPrice}</span>
                <span className="new-prod-old-price">{SecondNewSection[1].oldPrice}</span>
            </div>
            <div className="new-prod-but-cont">
                <button className="new-prod-but">ADD TO CART</button>
            </div>
            </div>
        </div>
    
        <div className="prod-cont-sub third-pro-con">
            <div className="prod-cre-sec">
            <div className={ThirdNewSection[1].class}><div><span>{ThirdNewSection[1].off}</span></div></div>
            <div className="new-prod-first">
                <Image className="new-prod-img-1" src={ThirdNewSection[1].src1} height="160px" width="180"/>
                <Image className="new-prod-img-2" src={ThirdNewSection[1].src2} height="170px" width="195"/>
            </div>
            <div className="new-prod-name"><span>{ThirdNewSection[1].prodName}</span></div>
            <div className="new-prod-descp"><span>{ThirdNewSection[1].prodDescp}</span></div>
            <FiveStars />
            <div className="new-prod-price">
                <span className="new-prod-offer-price">{ThirdNewSection[1].offerPrice}</span>
                <span className="new-prod-old-price">{ThirdNewSection[1].oldPrice}</span>
            </div>
            <div className="new-prod-but-cont">
                <button className="new-prod-but">ADD TO CART</button>
            </div>
            </div>
        </div>
    
    
        
        <div className="prod-cont-sub fourth-pro-con">
            <div className="prod-cre-sec">
            <div className={FourthNewSection[1].class}><div><span>{FourthNewSection[1].off}</span></div></div>
            <div className="new-prod-first">
                <Image className="new-prod-img-1" src={FourthNewSection[1].src1} height="160px" width="180"/>
                <Image className="new-prod-img-2" src={FourthNewSection[1].src2} height="170px" width="195"/>
            </div>
            <div className="new-prod-name"><span>{FourthNewSection[1].prodName}</span></div>
            <div className="new-prod-descp"><span>{FourthNewSection[1].prodDescp}</span></div>
            <FiveStars />
            <div className="new-prod-price">
                <span className="new-prod-offer-price">{FourthNewSection[1].offerPrice}</span>
                <span className="new-prod-old-price">{FourthNewSection[1].oldPrice}</span>
            </div>
            <div className="new-prod-but-cont">
                <button className="new-prod-but">ADD TO CART</button>
            </div>
            </div>
        </div>
        </div>
    
        <div className="third-new">
        <div className="prod-cont-sub">
            <div className="prod-first prod-cre-sec">
            <div className={FirstNewSection[2].class}><div><span>{FirstNewSection[2].off}</span></div></div>
            <div className="new-prod-first">
                <Image className="new-prod-img-1" src={FirstNewSection[2].src1} height="160px" width="180"/>
                <Image className="new-prod-img-2" src={FirstNewSection[2].src2} height="170px" width="195"/>
            </div>
            <div className="new-prod-name"><span>{FirstNewSection[2].prodName}</span></div>
            <div className="new-prod-descp"><span>{FirstNewSection[2].prodDescp}</span></div>
            <FiveStars />
            <div className="new-prod-price">
                <span className="new-prod-offer-price">{FirstNewSection[2].offerPrice}</span>
                <span className="new-prod-old-price">{FirstNewSection[2].oldPrice}</span>
            </div>
            <div className="new-prod-but-cont">
                <button className="new-prod-but">ADD TO CART</button>
            </div>
            </div>
        </div>
    
    
        <div className="prod-cont-sub">
            <div className="prod-cre-sec">
            <div className={SecondNewSection[2].class}><div><span>{SecondNewSection[2].off}</span></div></div>
            <div className="new-prod-first">
                <Image className="new-prod-img-1" src={SecondNewSection[2].src1} height="160px" width="180"/>
                <Image className="new-prod-img-2" src={SecondNewSection[2].src2} height="170px" width="195"/>
            </div>
            <div className="new-prod-name"><span>{SecondNewSection[2].prodName}</span></div>
            <div className="new-prod-descp"><span>{SecondNewSection[2].prodDescp}</span></div>
            <FiveStars />
            <div className="new-prod-price">
                <span className="new-prod-offer-price">{SecondNewSection[2].offerPrice}</span>
                <span className="new-prod-old-price">{SecondNewSection[2].oldPrice}</span>
            </div>
            <div className="new-prod-but-cont">
                <button className="new-prod-but">ADD TO CART</button>
            </div>
            </div>
        </div>
    
        <div className="prod-cont-sub third-pro-con">
            <div className="prod-cre-sec">
            <div className={ThirdNewSection[2].class}><div><span>{ThirdNewSection[2].off}</span></div></div>
            <div className="new-prod-first">
                <Image className="new-prod-img-1" src={ThirdNewSection[2].src1} height="160px" width="180"/>
                <Image className="new-prod-img-2" src={ThirdNewSection[2].src2} height="170px" width="195"/>
            </div>
            <div className="new-prod-name"><span>{ThirdNewSection[2].prodName}</span></div>
            <div className="new-prod-descp"><span>{ThirdNewSection[2].prodDescp}</span></div>
            <FiveStars />
            <div className="new-prod-price">
                <span className="new-prod-offer-price">{ThirdNewSection[2].offerPrice}</span>
                <span className="new-prod-old-price">{ThirdNewSection[2].oldPrice}</span>
            </div>
            <div className="new-prod-but-cont">
                <button className="new-prod-but">ADD TO CART</button>
            </div>
            </div>
        </div>
    
    
        
        <div className="prod-cont-sub fourth-pro-con">
            <div className="prod-cre-sec">
            <div className={FourthNewSection[2].class}><div><span>{FourthNewSection[2].off}</span></div></div>
            <div className="new-prod-first">
                <Image className="new-prod-img-1" src={FourthNewSection[2].src1} height="160px" width="180"/>
                <Image className="new-prod-img-2" src={FourthNewSection[2].src2} height="170px" width="195"/>
            </div>
            <div className="new-prod-name"><span>{FourthNewSection[2].prodName}</span></div>
            <div className="new-prod-descp"><span>{FourthNewSection[2].prodDescp}</span></div>
            <FiveStars />
            <div className="new-prod-price">
                <span className="new-prod-offer-price">{FourthNewSection[2].offerPrice}</span>
                <span className="new-prod-old-price">{FourthNewSection[2].oldPrice}</span>
            </div>
            <div className="new-prod-but-cont">
                <button className="new-prod-but">ADD TO CART</button>
            </div>
            </div>
        </div>
        </div>
    
        </div>
    )
}
export default MainNewSection;