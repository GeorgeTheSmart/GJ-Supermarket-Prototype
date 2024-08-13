import React from "react"; 
import Header from "./Header";
import Banner from "./Banner"
import MappingNav from "./MappingNav";
import Mapping from "./MappingRight";
import SecondSection from "./SecondSection";
import NavBar from "./NavBar";
import CategoryBar from "./CategoryBar";
import MainNewSection from "./MainNewSection";
import Image from "./Image";
import LastSection from "./LastBeforeSection";
import OurService from "./OurService";
import BlogSection from "./BlogSection";
import Footer from "./Footer";

function App(){


    return(
    <div className="container">
        <Header />
        <hr className="horizontal-rule"></hr>
        <NavBar />
        <Banner />
        <MappingNav />
        <div className="main-section">
        <CategoryBar />
        <Mapping />
        </div>
        <SecondSection />
        <MainNewSection />
        <LastSection />
        <OurService />
        <BlogSection />
        <Footer />    
</div>
);
}

export default App;