import React from "react";
import "../../GlobalCss/PrimaryNav.css";
function PrimaryNav() {
  return (
    <div className="primarynav-container">
      <div className="primary-nav">
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">HotDeals</a>
          </li>
          <li>
            <a href="">Categories</a>
          </li>
          <li>
            <a href="">Laptops</a>
          </li>
          <li>
            <a href="">SmartPhones</a>
          </li>
          <li>
            <a href="">Cameras</a>
          </li>
          <li>
            <a href="">Accessories</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PrimaryNav;
