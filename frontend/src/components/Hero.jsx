const Hero = () => {
  return (
    <section className="pt-32 pb-16 px-6 lg:px-20 grid lg:grid-cols-2 gap-10 items-center">
      <div>
        <h1 className="text-6xl md:text-8xl font-serif font-bold leading-tight">
          Welcome, <br /> <span className="text-slate-700">To our Store</span>
        </h1>
        <p className="italic text-xl text-gray-600 mt-4">Shop with us,</p>
        <button className="mt-8 px-10 py-4 bg-teal-400 text-slate-900 font-bold rounded-full shadow-lg hover:shadow-teal-200 hover:scale-105 transition-all duration-300 italic">
          Explore more...
        </button>
      </div>

      {/* Flash Sale Slider Placeholder */}
      <div className="relative group bg-[#f5e6d3] rounded-lg p-10 h-[400px] flex flex-col justify-center items-center text-center shadow-xl">
        <h2 className="text-5xl font-extrabold text-red-500 mb-4">Flash Sale !!!</h2>
        <div className="bg-white/40 p-6 rounded-lg backdrop-blur-sm">
           <p className="text-2xl font-bold text-pink-500 uppercase">Get 20% off on one of our item on your first purchase.</p>
        </div>
        <p className="mt-6 font-bold text-sm tracking-[0.2em]">SHOP NOW!! SHOP NOW!!</p>
        
        {/* Slider Controls */}
        <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
           &larr;
        </button>
        <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
           &rarr;
        </button>
      </div>
    </section>
  );
};


export default Hero; // Add this line to Hero.jsx