const products = [
  { id: 1, name: 'Premium Puffer Jacket', category: 'Jackets', price: 2600, oldPrice: 3200, img: 'jacket-blue.jpg' },
  { id: 2, name: 'Premium Puffer Jacket', category: 'Winter Jackets', price: 2600, oldPrice: 3200, img: 'jacket-grey.jpg' },
  { id: 3, name: 'Premium Puffer Jacket', category: 'Hoodie', price: 2600, oldPrice: 3200, img: 'hoodie-green.jpg' },
  { id: 4, name: 'Premium Puffer Jacket', category: 'Premium Puffer Jacket', price: 2600, oldPrice: 3200, img: 'shoes-red.jpg' },
];

const WeeklySale = () => {
  return (
    <section className="px-6 lg:px-20 py-16">
      <h2 className="text-4xl font-serif text-center mb-12">Weekly Sale</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 transition-transform duration-300 group">
            <div className="h-72 bg-gray-100 flex items-center justify-center p-4">
              <img src={product.img} alt={product.name} className="h-full object-contain mix-blend-multiply" />
            </div>
            <div className="p-5">
              <span className="text-xs text-teal-600 font-bold uppercase">{product.category}</span>
              <h3 className="font-bold text-slate-800 mt-1">{product.name}</h3>
              <div className="mt-2 flex items-center gap-3">
                <span className="text-lg font-bold">Rs. {product.price}</span>
                <span className="text-sm text-gray-400 line-through font-serif">Rs. {product.oldPrice}</span>
              </div>
              <button className="w-full mt-4 py-2 bg-teal-300 hover:bg-teal-400 text-slate-900 font-bold rounded-xl transition-colors shadow-md active:scale-95">
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