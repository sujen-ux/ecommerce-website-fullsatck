import React, { useState } from 'react';
import { ShoppingBag, ArrowLeft } from 'lucide-react';

const AuthPage = ({ onLogin, onBack }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ email: '', password: '', name: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, we simulate a login to update the UI
    onLogin({ name: formData.name || 'User', email: formData.email });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#E0F7FA] to-white p-6">
      <div className="bg-white rounded-[2rem] shadow-2xl w-full max-w-md p-10 relative overflow-hidden">
        <button onClick={onBack} className="absolute top-6 left-6 p-2 text-gray-400 hover:text-black transition-colors">
          <ArrowLeft size={20} />
        </button>

        <div className="text-center mb-10">
          <div className="inline-flex p-4 bg-[#f0f9fb] rounded-2xl mb-4 text-[#00BCD4]">
            <ShoppingBag size={32} />
          </div>
          <h2 className="font-serif text-3xl font-bold text-[#1a1a2e]">Senshi-Ecommerce</h2>
          <p className="text-gray-400 text-sm mt-2">Welcome back! Please enter your details.</p>
        </div>

        <div className="flex border-b-2 border-gray-100 mb-8">
          <button 
            onClick={() => setIsLogin(true)}
            className={`flex-1 pb-4 text-sm font-bold transition-all ${isLogin ? 'text-[#00BCD4] border-b-2 border-[#00BCD4]' : 'text-gray-400'}`}
          >
            Login
          </button>
          <button 
            onClick={() => setIsLogin(false)}
            className={`flex-1 pb-4 text-sm font-bold transition-all ${!isLogin ? 'text-[#00BCD4] border-b-2 border-[#00BCD4]' : 'text-gray-400'}`}
          >
            Sign Up
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {!isLogin && (
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Full Name</label>
              <input 
                className="w-full px-5 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:border-[#00BCD4] outline-none"
                placeholder="Senshi User"
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
          )}
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Email</label>
            <input 
              type="email" required
              className="w-full px-5 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:border-[#00BCD4] outline-none"
              placeholder="user@senshi.com"
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Password</label>
            <input 
              type="password" required
              className="w-full px-5 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:border-[#00BCD4] outline-none"
              placeholder="••••••••"
              onChange={(e) => setFormData({...formData, password: e.target.value})}
            />
          </div>

          <button className="w-full py-4 bg-[#1a1a2e] text-white font-bold rounded-2xl hover:bg-[#0097A7] transition-all shadow-lg shadow-gray-200">
            {isLogin ? 'Login to Store' : 'Create Account'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthPage;