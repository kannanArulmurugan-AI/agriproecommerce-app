// src/Home.js
import React, { useState, useEffect } from 'react';
import { db } from '../firebase'; // Firebase Firestore reference
import Product from './Product';

const Home = () => {
  const [products, setProducts] = useState([]);

  // Fetch products from Firestore on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      const productsSnapshot = await db.collection('products').get();
      const productsList = productsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(productsList);
    };

    fetchProducts();
  }, []);

  return (
    <div className="home">
      <h1>Our Products</h1>
      <div className="product-list">
        {products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
