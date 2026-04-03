import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1a1a2e] text-[#94a3b8] pt-16 pb-8 px-8 lg:px-20 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Column 1: Brand */}
        <div>
          <h3 className="font-serif text-2xl text-white font-bold mb-4">SenShi</h3>
          <p className="text-sm leading-relaxed max-w-xs">
            We're committed to delivering high-quality apparel with sustainable materials and ethical production methods.
          </p>
          <div className="flex gap-2 mt-6">
            {['FB', 'IG', 'TW', 'YT'].map((social) => (
              <button key={social} className="bg-white/10 hover:bg-[#00BCD4] text-white text-[10px] font-bold px-3 py-1.5 rounded transition-colors">
                {social}
              </button>
            ))}
          </div>
        </div>

        {/* Column 2: Shop */}
        <div>
          <h4 className="text-white text-sm font-bold mb-5 uppercase tracking-wider">Shop</h4>
          <ul className="space-y-3 text-sm">
            {["Men's Collection", "Women's Collection", "Accessories", "New Arrivals", "Sale Items"].map((item) => (
              <li key={item} className="hover:text-[#00BCD4] cursor-pointer transition-colors">{item}</li>
            ))}
          </ul>
        </div>

        {/* Column 3: Customer Service */}
        <div>
          <h4 className="text-white text-sm font-bold mb-5 uppercase tracking-wider">Customer Service</h4>
          <ul className="space-y-3 text-sm">
            {["Contact Us", "FAQs", "Shipping & Returns", "Size Guide", "Order Tracking"].map((item) => (
              <li key={item} className="hover:text-[#00BCD4] cursor-pointer transition-colors">{item}</li>
            ))}
          </ul>
        </div>

        {/* Column 4: About Us */}
        <div>
          <h4 className="text-white text-sm font-bold mb-5 uppercase tracking-wider">About Us</h4>
          <ul className="space-y-3 text-sm">
            {["Our Story", "Sustainability", "Careers", "Press", "Privacy Policy"].map((item) => (
              <li key={item} className="hover:text-[#00BCD4] cursor-pointer transition-colors">{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 pt-8 text-center text-xs text-gray-500">
        <p>© 2026 Senshi-Ecommerce. All rights reserved. | <span className="text-[#00BCD4] cursor-pointer">Admin</span></p>
      </div>
    </footer>
  );
};

export default Footer;