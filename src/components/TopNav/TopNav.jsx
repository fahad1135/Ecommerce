import React from "react";
import "../../GlobalCss/TopNav.css";

function TopNav() {
  return (
    <div className="topnav-container">
      <div className="top-nav1 tninner">
        <div className="tninner-1">
          <div className="tninc">
            <ul>
              <li>
                <a href="">
                  <i className="fa-solid fa-phone"></i>
                  +923369678070
                </a>
              </li>
            </ul>
          </div>
          <div className="tninc">
            <ul>
              <li>
                <a href="">
                  <i className="fa-regular fa-envelope"></i>
                  Fahad122@gamail.com
                </a>
              </li>
            </ul>
          </div>
          <div className="tninc">
            <ul>
              <li>
                <a href="">
                  <i className="fa-solid fa-location-dot"></i>
                  123 Stonecol Raod
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="tninner-2">
          <div className="">
            <ul>
              <li>
                <a href="">
                  <i className="fa-solid fa-dollar-sign"></i>
                  USD
                </a>
              </li>
            </ul>
          </div>
          <div className="">
            <ul>
              <li>
                <a href="">
                  <i className="fa-solid fa-user"></i>
                  My Account
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopNav;
