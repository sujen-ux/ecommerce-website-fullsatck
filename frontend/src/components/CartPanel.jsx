import React from 'react';
import { X, Plus, Minus, Trash2 } from 'lucide-react';

const CartPanel = ({ isOpen, onClose, cart, setCart }) => {
  const total = cart.reduce((sum, item) => sum + (item.salePrice || item.price) * item.qty, 0);

  const updateQty = (id, delta) => {
    setCart(prev => prev.map(item => 
      item._id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
    ));
  };

  const removeItem = (id) => {
    setCart(prev => prev.filter(item => item._id !== id));
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 z-[60] backdrop-blur-sm" onClick={onClose} />
      )}
      
      {/* Panel */}
      <div className={`fixed right-0 top-0 h-full w-full max-w-sm bg-white z-[70] shadow-2xl transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 h-full flex flex-col">
          <div className="flex items-center justify-between border-b pb-4">
            <h3 className="font-serif text-xl font-bold">Your Cart ({cart.length})</h3>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full"><X size={20} /></button>
          </div>

          <div className="flex-grow overflow-y-auto py-4">
            {cart.length === 0 ? (
              <div className="text-center py-20 text-gray-400 italic">Your cart is empty</div>
            ) : (
              cart.map(item => (
                <div key={item._id} className="flex gap-4 py-4 border-b border-gray-50">
                  <div className="w-16 h-16 bg-[#edf6f9] rounded-lg flex items-center justify-center text-2xl">👕</div>
                  <div className="flex-grow">
                    <h4 className="text-sm font-bold">{item.name}</h4>
                    <p className="text-teal-dark font-bold text-xs">Rs. {(item.salePrice || item.price).toLocaleString()}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button onClick={() => updateQty(item._id, -1)} className="p-1 bg-gray-100 rounded hover:bg-teal-accent transition-colors"><Minus size={12} /></button>
                      <span className="text-sm font-bold">{item.qty}</span>
                      <button onClick={() => updateQty(item._id, 1)} className="p-1 bg-gray-100 rounded hover:bg-teal-accent transition-colors"><Plus size={12} /></button>
                      <button onClick={() => removeItem(item._id)} className="ml-auto text-red-400 hover:text-red-600"><Trash2 size={16} /></button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="border-t pt-6">
            <div className="flex justify-between font-bold text-lg mb-4">
              <span>Total</span>
              <span>Rs. {total.toLocaleString()}</span>
            </div>
            <button className="w-full py-4 bg-black text-white font-bold rounded-xl hover:bg-teal-dark transition-all">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPanel;