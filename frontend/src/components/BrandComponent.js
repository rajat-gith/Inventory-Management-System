import React from "react";
import "../css/BrandComponent.css";

function BrandComponent({ store_brands }) {
  return (
    <div className="brands_details">
      {store_brands.map((key) => (
        <div className="brands" key={key._id}>
          <p>{key.name}</p>
        </div>
      ))}
    </div>
  );
}

export default BrandComponent;
