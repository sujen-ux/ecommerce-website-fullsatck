// ... other imports
import AuthPage from './pages/AuthPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home'); // home | admin | auth
  const [searchQuery, setSearchQuery] = useState(''); // Added Search State
  const [user, setUser] = useState(null);

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