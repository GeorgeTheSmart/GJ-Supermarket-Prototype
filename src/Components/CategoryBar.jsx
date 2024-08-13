import React from "react";
import Image from "./Image";


function CategoryBar(){

    return(
    <div className="left-side">
        <div id="category-container">
            <div className="heading-cat"><span>CATEGORY</span></div>
                <div className="categ">
                    <Image src="./images/icons/dress.svg" height="25" width="25"/>
                    <span>Clothes</span>
                    <Image src="./images/icons/plus.svg" className="plus" height="15" width="15"/>
                </div>
                <div className="categ">
                    <Image src="./images/icons/shoes.svg" height="25" width="25"/>
                    <span>Footwear</span>
                    <Image src="./images/icons/plus.svg" className="plus" height="15" width="15"/>
                </div>
                <div className="categ">
                    <Image src="./images/icons/jewelry.svg" height="25" width="25"/>
                    <span>Jewellery</span>
                    <Image src="./images/icons/plus.svg" className="plus" height="15" width="15"/>
                </div>
                <div className="categ">
                    <Image src="./images/icons/perfume.svg" height="25" width="25"/>
                    <span>Perfume</span>
                    <Image src="./images/icons/plus.svg" className="plus" height="15" width="15"/>
                </div>
                <div className="categ">
                    <Image src="./images/icons/cosmetics.svg" height="25" width="25"/>
                    <span>Cosmetics</span>
                    <Image src="./images/icons/plus.svg" className="plus" height="15" width="15"/>
                </div>
                <div className="categ">
                    <Image src="./images/icons/glasses.svg" height="25" width="25"/>
                    <span>Glasses</span>
                    <Image src="./images/icons/plus.svg" className="plus" height="15" width="15"/>
                </div>
                <div className="categ">
                    <Image src="./images/icons/bag.svg" height="25" width="25"/>
                    <span>Bags</span>
                    <Image src="./images/icons/plus.svg" className="plus" height="15" width="15"/>
                </div>
                </div>
                </div>
);
}

export default CategoryBar;