import React from "react";
import Image from "./Image";

function Footer(){
    return(<div className="full-footer">
        <div className="brand-directory-cont">
            <div className="brand-directory"><span>BRAND DIRECTORY</span></div>
            <div className="brand-sections-cont">
                <div className="brand-sections"><span>FASHION:</span></div>
                <div className="brand-categories first-fashion"><span>T-Shirts | Shirts | Shorts & Jeans | Jacket | Dress & Frock | Innerwear | Hosiery</span></div>
            </div>
            <div className="brand-sections-cont">
                <div className="brand-sections"><span>FOOTWEAR:</span></div>
                <div className="brand-categories"><span>Sports | Formals | Boots | Casuals | Cowboy Shoes | Safety Shoes | Party Wear Shoes | Branded | Firstcopy | Long Shoes</span></div>
            </div>
            <div className="brand-sections-cont">
                <div className="brand-sections"><span>JEWELLERY:</span></div>
                <div className="brand-categories"><span>Necklace | Earings | Pendants | Crystal Bangles | Bracelets | Nosepin | Chain | Earrings | Couple Rings</span></div>
            </div>
            <div className="brand-sections-cont">
                <div className="brand-sections"><span>COSMETICS:</span></div>
                <div className="brand-categories"><span></span>Shampoo | Bodywash | Facewash | Makeup Kit | Liner | Lipstick | Perfume | Body Soap | Scrub | Hair Gel | Hair Colors | Hair Dye | Sunscreen</div>
            </div>
            <hr className="footer-hr"></hr>
        </div>
        <div className="pages-link">
            <div className="footer-cat">
                <div className="footer-cat-head first-cat-head"><span>POPULAR  CATEGORIES</span></div>
                {/* <hr className="footer-pink-hr"></hr> */}
                    <div className="footer-links-cont-section"><span>Fashion</span></div>
                    <div className="footer-links-cont-section"><span>Electronics</span></div>
                    <div className="footer-links-cont-section"><span>Cosmetics</span></div>
                    <div className="footer-links-cont-section"><span>Health</span></div>
                    <div className="footer-links-cont-section"><span>Watches</span></div>
            </div>
            <div className="footer-cat">
            <div className="footer-cat-head"><span>PRODUCTS</span></div>
                    <div className="footer-links-cont-section"><span>Peices Drop</span></div>
                    <div className="footer-links-cont-section"><span>New Products</span></div>
                    <div className="footer-links-cont-section"><span>Best Sales</span></div>
                    <div className="footer-links-cont-section"><span>Contact Us</span></div>
                    <div className="footer-links-cont-section"><span>Sitemap</span></div>
            </div>
            <div className="footer-cat">
            <div className="footer-cat-head"><span>OUR COMPANY</span></div>
                    <div className="footer-links-cont-section"><span>Delivery</span></div>
                    <div className="footer-links-cont-section"><span>Legal Notice</span></div>
                    <div className="footer-links-cont-section"><span>Terms and Conditions</span></div>
                    <div className="footer-links-cont-section"><span>About Us</span></div>
                    <div className="footer-links-cont-section"><span>Secure Payment</span></div>
            </div>
            <div className="footer-cat">
            <div className="footer-cat-head"><span>SERVICES</span></div>
                    <div className="footer-links-cont-section"><span>Prices Drop</span></div>
                    <div className="footer-links-cont-section"><span>New Products</span></div>
                    <div className="footer-links-cont-section"><span>Best Sales</span></div>
                    <div className="footer-links-cont-section"><span>Contact Us</span></div>
                    <div className="footer-links-cont-section"><span>Sitemap</span></div>
            </div>
            <div className="footer-cat">
            <div className="footer-cat-head"><span>CONTACT</span></div>
                    <div className="footer-links-cont-section contact">
                        <span>
                            205/110, Arcot Road, Vadapalani, Chennai - 600 026
                        </span>
                    </div>
                    <div className="footer-links-cont-section">
                        <span>044-2372 1354</span>
                    </div>
                    <div className="footer-links-cont-section">
                        <span>gjsupermarket@yahoo.com</span>
                    </div>
            </div>
        </div>
        <hr className="footer-hr"></hr>
        <div className="footer">
            <div className="footer-image">
                <Image src="./images/payment.png"/>
            </div>
            <div>
                <span>
                Copyright © GJ Supermarket all rights reserved
                </span>
            </div>
        </div>
    </div>)
}

export default Footer