import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WeeklySale from './components/WeeklySale';
import Footer from './components/Footer';

function App() {
  const [products, setProducts] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  // This will link to your Docker/Node backend later
  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log("Backend not detected, using fallback data.");
      }
    };
    getProducts();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar cartCount={cartCount} />
      <main className="flex-grow">
        <Hero />
        <WeeklySale products={products} />
      </main>
      <Footer />
    </div>
  );
}

export default App;