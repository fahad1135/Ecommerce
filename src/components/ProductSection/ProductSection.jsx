import React from "react";

import "../../GlobalCss/ProductSection.css";

import Card from "../Card/Card";

function ProductSection() {
  return (
    <div className="product-section">
      <Card
        title="Laptope 
Collection"
      />
      <Card
        title="Assecories 
Collection"
      />
      <Card
        title="Camaras 
Collection"
      />
    </div>
  );
}

export default ProductSection;
