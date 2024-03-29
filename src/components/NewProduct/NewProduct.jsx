import React from "react";
import "../../GlobalCss/NewProduct.css";
import CollectionCard from "../CollectionCard/CollectionCard";
function NewProduct() {
  return (
    <div className="new-productsection">
      <div className="new-product-nav">
        <div className="title">
          <h3>New Products</h3>
        </div>
        <div className="links">
          <ul>
            <li>
              <a href="">Laptops</a>
            </li>
            <li>
              <a href="">SamertPhones</a>
            </li>
            <li>
              <a href="">Cameras</a>
            </li>
            <li>
              <a href="">Assesories</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="card-section">
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
      </div>
    </div>
  );
}

export default NewProduct;
