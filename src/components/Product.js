// src/Product.js
import React from 'react';

const Product = ({ product }) => {
  const { name, price, image, description } = product;

  const addToCart = () => {
    // Add logic to add the product to the cart
    console.log(`Added ${name} to cart`);
  };

  return (
    <div className="product">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Price: ${price.toFixed(2)}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default Product;
