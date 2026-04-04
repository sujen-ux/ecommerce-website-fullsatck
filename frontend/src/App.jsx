import React, { useState, useEffect } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { API_URL } from './api';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WeeklySale from './components/WeeklySale';
import Footer from './components/Footer';
import CartPanel from './components/CartPanel';
import AuthPage from './pages/AuthPage';
import AdminDashboard from './pages/AdminDashboard';
import Checkout from './pages/Checkout';

function App () {
  const [currentPage, setCurrentPage] = useState('home'); // home | admin | auth
  const [searchQuery, setSearchQuery] = useState('');
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');

  const fetchProducts = async () => {
    try {
      const response = await fetch(`${API_URL}/products`);
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
    toast.success(`${product.name} added to cart!`, {
      style: { borderRadius: '10px', background: '#1a1a2e', color: '#fff' }
    });
  };

  // Filter products based on search input
  const filteredProducts = products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  if (isCheckingOut) {
    return (
      <Checkout
        cart={cart}
        total={cart.reduce((s, i) => s + (i.salePrice || i.price) * i.qty, 0)}
        onBack={() => setIsCheckingOut(false)}
        onComplete={() => {
          toast.success('Payment Successful! Order #1024 placed.');
          setCart([]);
          setIsCheckingOut(false);
        }}
      />
    );
  }

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
            onCategoryChange={setActiveCategory}
            activeCategory={activeCategory}
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
      <CartPanel
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onCheckout={() => setIsCheckingOut(true)}
        cart={cart}
        setCart={setCart}
      />
      <Toaster />
    </div>
  );
}

export default App;
