import React from "react";
import "../../GlobalCss/PrimaryNav.css";
import { Link } from "react-router-dom";
function PrimaryNav() {
  return (
    <div className="primarynav-container">
      <div className="primary-nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/hotdeal">HotDeals</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
          <li>
            <Link to="/laptops">Laptops</Link>
          </li>
          <li>
            <Link to="/smartphones">SmartPhones</Link>
          </li>
          <li>
            <Link to="cameras">Cameras</Link>
          </li>
          <li>
            <Link to="accessories">Accessories</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PrimaryNav;
