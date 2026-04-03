import React, { useState } from 'react';
import { Package, Users, DollarSign, Tag, Plus, Edit, Trash2 } from 'lucide-react';

const AdminDashboard = ({ products, setProducts }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const stats = [
    { label: "Total Products", value: products.length, icon: <Package size={20}/>, sub: "In catalog" },
    { label: "On Sale", value: products.filter(p => p.onSale).length, icon: <Tag size={20}/>, sub: "Weekly sale items" },
    { label: "Total Users", value: "0", icon: <Users size={20}/>, sub: "Registered" },
    { label: "Catalog Value", value: `Rs. ${products.reduce((s,p) => s + (p.salePrice || p.price), 0).toLocaleString()}`, icon: <DollarSign size={20}/>, sub: "Total value" }
  ];

  return (
    <div className="flex min-h-screen bg-[#f3f7f9]">
      {/* Sidebar */}
      <div className="w-64 bg-[#1a1a2e] text-[#94a3b8] p-8 space-y-8">
        <h2 className="text-white font-serif font-bold text-lg border-b border-white/10 pb-4">⚙ Admin Panel</h2>
        <nav className="space-y-4">
          <div className="text-teal-primary font-bold cursor-pointer flex items-center gap-2">
            <Package size={18}/> Products
          </div>
          <div className="hover:text-white cursor-pointer flex items-center gap-2 transition-colors">
            <Users size={18}/> Users
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <main className="flex-1 p-10">
        <h1 className="font-serif text-3xl font-bold mb-8">Dashboard</h1>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex justify-between items-start mb-4">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{stat.label}</span>
                <div className="text-teal-primary">{stat.icon}</div>
              </div>
              <div className="text-2xl font-bold text-[#1a1a2e]">{stat.value}</div>
              <p className="text-[10px] text-teal-dark mt-1 font-medium">{stat.sub}</p>
            </div>
          ))}
        </div>

        {/* Table Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-50 flex justify-between items-center">
            <h3 className="font-bold text-lg">Product List</h3>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-teal-primary text-white px-6 py-2 rounded-xl text-xs font-bold hover:bg-teal-dark transition-all flex items-center gap-2"
            >
              <Plus size={16}/> Add Product
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-50 text-[10px] uppercase tracking-widest text-gray-400 font-bold">
                <tr>
                  <th className="px-6 py-4">Image</th>
                  <th className="px-6 py-4">Name</th>
                  <th className="px-6 py-4">Category</th>
                  <th className="px-6 py-4">Price</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {products.map((p) => (
                  <tr key={p._id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="w-12 h-12 bg-[#edf6f9] rounded-lg flex items-center justify-center text-xl">👕</div>
                    </td>
                    <td className="px-6 py-4 font-bold text-sm">{p.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{p.category}</td>
                    <td className="px-6 py-4 text-sm font-bold">Rs. {p.price.toLocaleString()}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${p.onSale ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-500'}`}>
                        {p.onSale ? 'ON SALE' : 'REGULAR'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors"><Edit size={16}/></button>
                        <button className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"><Trash2 size={16}/></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;