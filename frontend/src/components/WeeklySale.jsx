import React from 'react';

const WeeklySale = ({ products }) => {
  // Fallback data if products haven't loaded from backend yet
  const displayProducts = products.length > 0 ? products : [
    { _id: '1', name: 'Premium Puffer Jacket', category: 'Jackets', price: 3200, salePrice: 2600, onSale: true, image: '' },
    { _id: '2', name: 'Winter Puffer Jacket', category: 'Winter Jackets', price: 3200, salePrice: 2600, onSale: true, image: '' },
    { _id: '3', name: 'Classic Hoodie', category: 'Hoodie', price: 3200, salePrice: 2600, onSale: true, image: '' },
    { _id: '4', name: 'Canvas Sneakers', category: 'Shoes', price: 3200, salePrice: 2600, onSale: true, image: '' }
  ];

  return (
    <section className="py-16 px-8 lg:px-20">
      <h2 className="font-serif text-4xl font-bold text-center mb-12 text-[#1a1a2e]">
        Weekly Sale
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {displayProducts.map((p) => (
          <div key={p._id} className="bg-white rounded-2xl overflow-hidden shadow-md hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col group">
            {/* Product Image Placeholder */}
            <div className="aspect-square bg-[#edf6f9] flex items-center justify-center text-6xl text-[#00BCD4] group-hover:scale-105 transition-transform duration-500">
              {p.image ? <img src={p.image} alt={p.name} className="w-full h-full object-cover" /> : '👕'}
            </div>

            <div className="p-5 flex flex-col flex-1">
              <span className="text-[10px] font-bold text-[#0097A7] uppercase tracking-widest mb-1">
                {p.category}
              </span>
              <h3 className="text-sm font-bold text-[#1a1a2e] mb-2">{p.name}</h3>
              <div className="flex items-center gap-3 mb-5">
                <span className="text-lg font-bold">Rs. {(p.salePrice || p.price).toLocaleString()}</span>
                {p.onSale && (
                  <span className="text-xs text-gray-400 line-through">Rs. {p.price.toLocaleString()}</span>
                )}
              </div>
              <button className="w-full py-3 bg-[#00BCD4] text-white text-xs font-bold rounded-xl hover:bg-[#0097A7] active:scale-95 transition-all shadow-sm">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WeeklySale;