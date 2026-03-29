import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SaleBanner from '../components/Salebanner';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <>
      <Navbar cartCount={0} />
      <Hero />
      <SaleBanner />
      <section className="products" id="shop">
        <div className="section-title"><h2>Our Collections</h2></div>
        <div className="products-grid">
          {products.map(p => <ProductCard key={p._id} product={p} />)}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;