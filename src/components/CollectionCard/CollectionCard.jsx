import React from "react";
import "../../GlobalCss/CollectionCard.css";
import img from "../../assets/360_F_328379347_xEKgEB2wkjAJmcqSTmrg4uKxfWrlL7D9.jpg";
export default function CollectionCard() {
  return (
    <div className="collection-card">
      <div className="card-img">
        <img src={img} alt="" />
      </div>
      <div className="category">
        <p>category</p>
        <div className="p-name">
          <p>Product Name Gose Here</p>
        </div>
        <div className="price">
          <p>
            $980.00 <span>$990.00</span>
          </p>
        </div>
        <div className="stars">
          <ul>
            <li>
              <i className="fa fa-star checked"></i>
            </li>
            <li>
              <i className="fa fa-star checked"></i>
            </li>
            <li>
              <i className="fa fa-star checked"></i>
            </li>
            <li>
              <i className="fa fa-star checked"></i>
            </li>
            <li>
              <i className="fa fa-star"></i>
            </li>
          </ul>
        </div>
        <div className="icons">
          <div className="heart">
            <i class="fa-regular fa-heart"></i>
          </div>
          <div className=" arrow">
            <i class="fa-solid fa-arrow-right-arrow-left"></i>
          </div>
          <div className="eye">
            <i class="fa-regular fa-eye"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
