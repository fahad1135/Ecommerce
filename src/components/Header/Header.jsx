import React from "react";
import "../../GlobalCss/Header.css";
import { useState } from "react";
function Header() {
  let [menuStatus, setMenuStatus] = useState(false);
  return (
    <div className="hearder-container">
      <div className="header">
        <div className="logo">
          <button className="micon" onClick={() => setMenuStatus(!menuStatus)}>
            {menuStatus ? (
              <span>
                <i class="fa-solid fa-xmark"></i>
              </span>
            ) : (
              <span>
                <i className=" fa-solid fa-bars"></i>
              </span>
            )}
          </button>

          <div
            className={`menu ${menuStatus ? "activeMenu" : ""}`}
            onMouseLeave={() => setMenuStatus(false)}
          >
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
          <a>
            Electro<span>.</span>
          </a>
        </div>
        <div className="input-group">
          <div className="select">
            <select name="" id="">
              <option value="">All Categorise</option>
              <option value=""></option>
            </select>
          </div>
          <div className="feild">
            <input type="search" placeholder="Search Here" />
          </div>
          <div className="button">
            <button type="button">Search</button>
          </div>
        </div>
        <div className="icon-container">
          <div className="iconbox1">
            <div className="icon">
              <i class="fa-regular fa-heart"></i>
            </div>
            <div className="icon-link">
              <a href="">Your Whishlsit</a>
            </div>
          </div>
          <div className="iconbox1">
            <div className="icon">
              <i class="fa-solid fa-cart-shopping"></i>
            </div>
            <div className="icon-link">
              <a href="">Your Cart</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
