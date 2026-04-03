import React, { useState, useEffect } from 'react';
import AuthPage from './pages/AuthPage';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WeeklySale from './components/WeeklySale';
import Footer from './components/Footer';
import CartPanel from './components/CartPanel';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  const [currentPage, setCurrentPage] = useState('home'); // home | admin | auth
  const [searchQuery, setSearchQuery] = useState('');
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/products');
      if (!response.ok) throw new Error('API request failed');
      const data = await response.json();
      setProducts(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('fetchProducts error:', error);
      setProducts([]);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item._id === product._id);
      if (exists) {
        return prev.map((item) =>
          item._id === product._id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  // Filter products based on search input
  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    p.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      {currentPage === 'auth' ? (
        <AuthPage 
          onLogin={(u) => { setUser(u); setCurrentPage('home'); }} 
          onBack={() => setCurrentPage('home')} 
        />
      ) : currentPage === 'admin' ? (
        <AdminDashboard products={products} onRefresh={fetchProducts} />
      ) : (
        <>
          <Navbar 
            cartCount={cart.length} 
            onCartClick={() => setIsCartOpen(true)}
            onLoginClick={() => setCurrentPage('auth')}
            onSearch={setSearchQuery} // Pass search handler
            user={user}
          />
          <main>
            <Hero />
            {/* Pass filteredProducts instead of products */}
            <WeeklySale products={filteredProducts.filter(p => p.onSale)} onAddToCart={addToCart} />
            <section className="py-10 px-8 lg:px-20 bg-white">
              <h2 className="font-serif text-3xl font-bold mb-8 text-center">All Collections</h2>
              <WeeklySale products={filteredProducts} onAddToCart={addToCart} />
            </section>
          </main>
          <Footer onAdminClick={() => setCurrentPage('admin')} />
        </>
      )}
      <CartPanel isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} cart={cart} setCart={setCart} />
    </div>
  );
}

export default App;
