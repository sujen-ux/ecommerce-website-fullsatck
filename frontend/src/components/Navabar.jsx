import React from 'react';
import { ShoppingCart, Heart, Search } from 'lucide-react';

const Navbar = ({ cartCount }) => {
  const categories = ['Wardrobe', 'Accessories', "Kid's", 'Shoes', 'Make-up', 'Furniture'];

  return (
    <header className="sticky top-0 z-50">
      {/* Marquee Ticker */}
      <div className="bg-[#0097A7] overflow-hidden py-2">
        <div className="marquee-inner">
          {Array(10).fill(0).map((_, i) => (
            <span key={i} className="text-white text-xs px-10 tracking-widest uppercase">
              &lt; Sign up & Get Rs. 500 off &gt;
            </span>
          ))}
        </div>
      </div>

      {/* Main Nav */}
      <nav className="bg-white shadow-md px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 font-serif text-xl font-bold">
          <div className="w-7 h-7 bg-black rounded-full"></div>
          Senshi-Ecommerce
        </div>

        <div className="relative w-full max-w-md hidden md:block">
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Search the product..." 
            className="w-full pl-10 pr-4 py-2 bg-[#f5fafb] border border-gray-200 rounded-full text-sm outline-none focus:border-[#00BCD4]"
          />
        </div>

        <div className="flex items-center gap-4">
          <button className="relative p-2 bg-[#eef6f8] rounded-full">
            <ShoppingCart size={20} />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold">
              {cartCount}
            </span>
          </button>
          <button className="p-2 bg-[#eef6f8] rounded-full">
            <Heart size={20} />
          </button>
          <button className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#0097A7] transition-colors">
            Login / Register
          </button>
        </div>
      </nav>

      {/* Category Bar */}
      <div className="bg-[#00BCD4] flex justify-center py-2 shadow-inner">
        {categories.map(cat => (
          <button key={cat} className="text-white px-6 py-1 text-sm font-medium hover:bg-black/10 transition-colors uppercase tracking-tight">
            {cat}
          </button>
        ))}
      </div>
    </header>
  );
};

export default Navbar;