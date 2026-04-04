import React, { useState } from 'react';
import { Package, ShoppingCart, Users, DollarSign, Tag, Plus, Edit, Trash2 } from 'lucide-react';
import { API_URL } from '../api';
import ProductModal from '../components/ProductModal'; // 1. Import the Modal

const AdminDashboard = ({ products, orders, onRefresh }) => {
  const [view, setView] = useState('products'); // 'products' | 'orders'
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // 2. The Save Logic that connects to your Docker Backend
  const handleSave = async (formData) => {
    try {
      const isEdit = !!formData._id;
      const url = isEdit 
        ? `${API_URL}/products/${formData._id}` 
        : `${API_URL}/products`;
      
      const response = await fetch(url, {
        method: isEdit ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        onRefresh(); // Trigger App.jsx to fetch the new list from MongoDB
        setIsModalOpen(false);
        setSelectedProduct(null);
      }
    } catch (err) {
      console.error("Connection to backend failed:", err);
    }
  };
  

  return (
    <div className="flex min-h-screen bg-[#f3f7f9]">
      <aside className="w-80 p-10 bg-slate-950 text-white">
        <h2 className="font-serif text-2xl font-bold mb-8">Admin</h2>
        {/* Sidebar Navigation */}
        <nav className="space-y-4">
          <div 
            onClick={() => setView('products')}
            className={`cursor-pointer flex items-center gap-2 transition-colors ${view === 'products' ? 'text-teal-accent font-bold' : 'hover:text-white'}`}
          >
            <Package size={18}/> Products
          </div>
          <div 
            onClick={() => setView('orders')}
            className={`cursor-pointer flex items-center gap-2 transition-colors ${view === 'orders' ? 'text-teal-accent font-bold' : 'hover:text-white'}`}
          >
            <ShoppingCart size={18}/> Orders
          </div>
        </nav>
      </aside>

      <main className="flex-1 p-10">
        <h1 className="font-serif text-3xl font-bold mb-8">Dashboard</h1>

        {/* ... (Keep your Stats Grid code exactly as it was) ... */}

        {view === 'products' ? (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-50 flex justify-between items-center">
              <h3 className="font-bold text-lg">Product List</h3>
              <button 
                onClick={() => { setSelectedProduct(null); setIsModalOpen(true); }}
                className="bg-[#00BCD4] text-white px-6 py-2 rounded-xl text-xs font-bold hover:bg-[#0097A7] transition-all flex items-center gap-2"
              >
                <Plus size={16}/> Add Product
              </button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                {/* ... (Keep your Thead code exactly as it was) ... */}
                <tbody className="divide-y divide-gray-50">
                  {products.map((p) => (
                    <tr key={p._id} className="hover:bg-gray-50/50">
                      <td className="px-6 py-4">
                        <div className="w-12 h-12 bg-[#edf6f9] rounded-lg flex items-center justify-center text-xl">👕</div>
                      </td>
                      <td className="px-6 py-4 font-bold text-sm">{p.name}</td>
                      <td className="px-6 py-4 text-sm text-gray-500">{p.category}</td>
                      <td className="px-6 py-4 text-sm font-bold">Rs. {p.price.toLocaleString()}</td>
                      <td className="px-6 py-4">
                        <button 
                          onClick={() => { setSelectedProduct(p); setIsModalOpen(true); }}
                          className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg"
                        >
                          <Edit size={16}/>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-gray-50 text-[10px] uppercase font-bold text-gray-400">
                <tr>
                  <th className="px-6 py-4">Order ID</th>
                  <th className="px-6 py-4">Customer</th>
                  <th className="px-6 py-4">Total</th>
                  <th className="px-6 py-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.map(order => (
                  <tr key={order.id} className="border-b border-gray-50">
                    <td className="px-6 py-4 font-mono text-xs">{order.id}</td>
                    <td className="px-6 py-4 text-sm">{order.customer}</td>
                    <td className="px-6 py-4 font-bold">Rs. {order.total.toLocaleString()}</td>
                    <td className="px-6 py-4">
                      <span className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full text-[10px] font-bold">PENDING</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* 3. Add the Modal Component at the bottom */}
        <ProductModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
          onSave={handleSave} 
          editProduct={selectedProduct} 
        />
      </main>
    </div>
  );
};

export default AdminDashboard;