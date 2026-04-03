// ... other imports
import AdminDashboard from './pages/AdminDashboard';

function App() {
  const [currentPage, setCurrentPage] = useState('home'); // home | admin
  const [products, setProducts] = useState([]);
  // ... other state

  return (
    <div className="min-h-screen flex flex-col">
      {currentPage === 'home' ? (
        <>
          <Navbar 
            cartCount={cart.reduce((sum, item) => sum + item.qty, 0)} 
            onCartClick={() => setIsCartOpen(true)} 
            onAdminClick={() => setCurrentPage('admin')} // Pass this to Footer
          />
          <main className="flex-grow">
            <Hero />
            <WeeklySale products={products} onAddToCart={addToCart} />
          </main>
          <Footer onAdminClick={() => setCurrentPage('admin')} />
        </>
      ) : (
        <AdminDashboard products={products} setProducts={setProducts} />
      )}
      <CartPanel isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} cart={cart} setCart={setCart} />
    </div>
  );
}