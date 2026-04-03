import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const ProductModal = ({ isOpen, onClose, onSave, editProduct }) => {
  const [formData, setFormData] = useState({
    name: '',
    category: 'Wardrobe',
    price: '',
    salePrice: '',
    image: '',
    description: '',
    onSale: false
  });

  useEffect(() => {
    if (editProduct) {
      setFormData(editProduct);
    } else {
      setFormData({
        name: '',
        category: 'Wardrobe',
        price: '',
        salePrice: '',
        image: '',
        description: '',
        onSale: false
      });
    }
  }, [editProduct, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-white rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200">
        <div className="px-8 py-6 border-b border-gray-100 flex justify-between items-center">
          <h2 className="font-serif text-2xl font-bold text-[#1a1a2e]">
            {editProduct ? 'Edit Product' : 'Add New Product'}
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-5 max-h-[70vh] overflow-y-auto">
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Product Name</label>
            <input 
              required
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-teal-primary outline-none transition-all text-sm"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              placeholder="e.g. Premium Puffer Jacket"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Category</label>
              <select 
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-teal-primary outline-none transition-all text-sm"
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value})}
              >
                {['Wardrobe', 'Accessories', "Kid's", 'Shoes', 'Make-up', 'Furniture', 'Jackets', 'Winter Jackets', 'Hoodie'].map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Price (Rs.)</label>
              <input 
                required type="number"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-teal-primary outline-none transition-all text-sm"
                value={formData.price}
                onChange={(e) => setFormData({...formData, price: e.target.value})}
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Description</label>
            <textarea 
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-teal-primary outline-none transition-all text-sm min-h-[100px]"
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
            />
          </div>

          <div className="flex items-center gap-3 p-4 bg-teal-50 rounded-2xl border border-teal-100">
            <input 
              type="checkbox" id="onSale"
              className="w-4 h-4 accent-teal-primary"
              checked={formData.onSale}
              onChange={(e) => setFormData({...formData, onSale: e.target.checked})}
            />
            <label htmlFor="onSale" className="text-xs font-bold text-teal-dark cursor-pointer">
              Show this in the "Weekly Sale" section
            </label>
          </div>

          <button type="submit" className="w-full py-4 bg-teal-primary text-white font-bold rounded-2xl hover:bg-teal-dark shadow-lg shadow-teal-200 transition-all active:scale-[0.98]">
            {editProduct ? 'Update Product' : 'Add Product'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductModal;