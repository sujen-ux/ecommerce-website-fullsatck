import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WeeklySale from './components/WeeklySale';
import Footer from './components/Footer';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Sync cart with localStorage
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('senshi_cart') || '[]');
    setCart(savedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem('senshi_cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart(prevCart => {
      const existing = prevCart.find(item => item._id === product._id);
      if (existing) {
        return prevCart.map(item => 
          item._id === product._id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prevCart, { ...product, qty: 1 }];
    });
    setIsCartOpen(true); // Open cart automatically on add
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar 
        cartCount={cart.reduce((sum, item) => sum + item.qty, 0)} 
        onCartClick={() => setIsCartOpen(true)} 
      />
      <main className="flex-grow">
        <Hero />
        <WeeklySale products={products} onAddToCart={addToCart} />
      </main>
      <Footer />
      {/* Step 11 will add the CartPanel component here */}
    </div>
  );
}

export default App;