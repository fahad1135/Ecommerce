import React from "react";
import img1 from "../../assets/360_F_328379347_xEKgEB2wkjAJmcqSTmrg4uKxfWrlL7D9.jpg";

import "../../GlobalCss/Card.css";
function Card(props) {
  return (
    <div className="card">
      <img src={img1} alt="" />
      <div className="overlay">
        <div className="title">
          <p>{props.title}</p>

          <a href="">
            Shope Now <i class="fa-solid fa-circle-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
