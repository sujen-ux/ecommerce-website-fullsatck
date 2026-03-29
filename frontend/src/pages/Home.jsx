import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // This connects to the backend you built earlier!
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Backend connection error:", err));
  }, []);

  return (
    <div className="home-container">
      <header className="shop-header">
        <h1>My Awesome Store</h1>
      </header>
      <main className="product-grid">
        {products.map((item) => (
          <ProductCard key={item._id} product={item} />
        ))}
      </main>
    </div>
  );
};

export default Home;