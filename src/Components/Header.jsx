import React from "react";
import Image from "./Image";
import SearchBar from "./SearchBar";
import LastHSection from "./LastHSection";

function Header() {
  return (
    <div class="header">
      <div className="logo">
        <Image src="./images/GJ Logo.png" classNeme="gj-logo" height="90px" width="150px"/>
      </div>
      <SearchBar />
      <LastHSection />
</div>
  );
}
export default Header;