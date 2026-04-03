import React from 'react';

const Hero = () => {
  return (
    <section className="bg-white grid lg:grid-cols-2 min-h-[450px]">
      {/* Left Side: Branding */}
      <div className="flex flex-col justify-center px-12 py-16 lg:px-20">
        <h1 className="font-serif text-7xl md:text-8xl font-black leading-tight tracking-tighter text-[#1a1a2e]">
          Welcome,
        </h1>
        <h2 className="font-serif text-3xl md:text-4xl font-bold mt-2 text-[#1a1a2e]">
          To our Store
        </h2>
        <p className="text-gray-500 italic text-lg mt-4 font-light">
          Shop with us,
        </p>
        <button className="mt-10 w-fit px-12 py-4 bg-[#00BCD4] text-white font-serif font-bold italic rounded-full shadow-lg hover:bg-[#0097A7] hover:-translate-y-1 transition-all">
          Explore more...
        </button>
      </div>

      {/* Right Side: Flash Sale Slider */}
      <div className="bg-[#fdf5e6] relative flex flex-col justify-center items-center p-10 overflow-hidden border-l border-gray-100">
        <div className="bg-[#fdf5e6] border-2 border-[#e8d5aa] rounded-2xl p-10 text-center w-full max-w-md shadow-sm">
          <h3 className="font-serif text-5xl font-black text-[#e91e8c] leading-none mb-4">
            Flash Sale !!!
          </h3>
          <div className="py-4 px-2">
            <p className="font-serif text-xl font-extrabold text-[#d4a800] uppercase tracking-wider leading-snug">
              Get 20% off on one of our item on your first purchase.
            </p>
          </div>
          <div className="flex gap-2 justify-center mt-6">
            {Array(4).fill(0).map((_, i) => (
              <button key={i} className="px-4 py-1 border border-gray-400 text-gray-500 rounded-full text-[10px] font-bold hover:bg-[#00BCD4] hover:text-white transition-all uppercase">
                Shop Now!!
              </button>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/70 text-white rounded-full flex items-center justify-center hover:bg-black transition-colors">
          ←
        </button>
        <button className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/70 text-white rounded-full flex items-center justify-center hover:bg-black transition-colors">
          →
        </button>
      </div>
    </section>
  );
};

export default Hero;