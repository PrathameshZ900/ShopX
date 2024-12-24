// FeaturedProducts.jsx
import React from "react";
import "./FeaturedProducts.css"; // Import the CSS file

const FeaturedProducts = () => {
  return (
    <div className="featured-products">

      <div className="product-grid">

      <div className="featured-header">
        <h4><strong>These, Please</strong></h4>
        <p>The pieces you can't stop thinking about—all in one place.</p>
      </div>
        <div className="product-item">
          <a href="/shop/women/clothing/sweaters/cashmere" className="product-link" title="Women’s Cashmere Sweaters">
            <img
              className="product-image"
              src="https://n.nordstrommedia.com/it/febf04a1-fd73-4ed2-b33f-61dd8abbb583.jpeg?h=382&amp;w=402"
              alt="Women’s Cashmere Sweaters"
            />
            <span className="product-title">Women’s Cashmere Sweaters</span>
          </a>
        </div>
        <div className="product-item">
          <a href="/shop/men/clothing/sweaters/cashmere" className="product-link" title="Men’s Cashmere Sweaters">
            <img
              className="product-image"
              src="https://n.nordstrommedia.com/it/fd4406f1-59cc-41ea-a0f7-3b5212e95b43.jpeg?h=382&amp;w=402"
              alt="Men’s Cashmere Sweaters"
            />
            <span className="product-title">Men’s Cashmere Sweaters</span>
          </a>
        </div>
        <div className="product-item">
          <a href="/shop/Beauty/Fragrance" className="product-link" title="Designer Fragrances & Gift Sets">
            <img
              className="product-image"
              src="https://n.nordstrommedia.com/it/93aec995-9fae-477c-ad22-3e758de3f7f7.jpeg?h=382&amp;w=402"
              alt="Designer Fragrances & Gift Sets"
            />
            <span className="product-title">Designer Fragrances & Gift Sets</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;