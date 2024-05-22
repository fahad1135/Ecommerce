import "../../GlobalCss/Header.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
function Header() {
  let [menuStatus, setMenuStatus] = useState(false);
  const cart = useSelector((state) => state.cart.cart);
  const getTotalQuantity = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };
  return (
    <div className="hearder-container">
      <div className="header">
        <div className="logo">
          <button className="micon" onClick={() => setMenuStatus(!menuStatus)}>
            {menuStatus ? (
              <span>
                <i className="fa-solid fa-xmark"></i>
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
              <i className="fa-regular fa-heart"></i>
            </div>
            <div className="icon-link">
              <a href="">Your Whishlsit</a>
            </div>
          </div>
          <div className="iconbox1">
            <div className="icon">
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
            <div className="icon-link">
              <Link to="/cart">
                Your Cart
                <p>{getTotalQuantity() || 0}</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
