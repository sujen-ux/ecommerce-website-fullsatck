import React, { useState } from 'react';
import { CreditCard, Truck, ShieldCheck } from 'lucide-react';

const Checkout = ({ cart, total, onComplete, onBack }) => {
  const [step, setStep] = useState(1); // 1: Shipping, 2: Payment

  return (
    <div className="min-h-screen bg-[#f0f9fb] p-6 lg:p-20">
      <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-10">
        
        {/* Left Side: Forms */}
        <div className="bg-white rounded-4xl p-8 shadow-sm">
          <div className="flex gap-4 mb-8">
            <div className={`h-1 flex-1 rounded-full ${step >= 1 ? 'bg-teal-primary' : 'bg-gray-100'}`} />
            <div className={`h-1 flex-1 rounded-full ${step >= 2 ? 'bg-teal-primary' : 'bg-gray-100'}`} />
          </div>

          {step === 1 ? (
            <div className="animate-in fade-in slide-in-from-left duration-300">
              <h2 className="font-serif text-2xl font-bold mb-6 flex items-center gap-2">
                <Truck className="text-teal-primary" /> Shipping Details
              </h2>
              <div className="space-y-4">
                <input className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-teal-primary" placeholder="Full Name" />
                <input className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-teal-primary" placeholder="Shipping Address" />
                <div className="grid grid-cols-2 gap-4">
                  <input className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-teal-primary" placeholder="City" />
                  <input className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-teal-primary" placeholder="Postal Code" />
                </div>
                <button onClick={() => setStep(2)} className="w-full py-4 bg-black text-white font-bold rounded-xl mt-6">Continue to Payment</button>
              </div>
            </div>
          ) : (
            <div className="animate-in fade-in slide-in-from-right duration-300">
              <h2 className="font-serif text-2xl font-bold mb-6 flex items-center gap-2">
                <CreditCard className="text-teal-primary" /> Payment Method
              </h2>
              <div className="space-y-4">
                <div className="p-4 border-2 border-teal-primary rounded-xl bg-teal-50 flex justify-between items-center">
                  <span className="font-bold text-sm">Credit / Debit Card</span>
                  <ShieldCheck className="text-teal-primary" />
                </div>
                <input className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl outline-none" placeholder="Card Number" />
                <div className="grid grid-cols-2 gap-4">
                  <input className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl outline-none" placeholder="MM/YY" />
                  <input className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl outline-none" placeholder="CVC" />
                </div>
                <button onClick={onComplete} className="w-full py-4 bg-teal-primary text-white font-bold rounded-xl mt-6 shadow-lg shadow-teal-100">Pay Rs. {total.toLocaleString()}</button>
                <button onClick={() => setStep(1)} className="w-full text-gray-400 text-sm font-bold mt-2">Back to shipping</button>
              </div>
            </div>
          )}
        </div>

        {/* Right Side: Summary */}
        <div className="space-y-6">
          <div className="bg-[#1a1a2e] text-white rounded-4xl p-8">
            <h3 className="font-serif text-xl font-bold mb-6">Order Summary</h3>
            <div className="space-y-4 max-h-60 overflow-y-auto mb-6 pr-2">
              {cart.map(item => (
                <div key={item._id} className="flex justify-between items-center text-sm">
                  <span className="opacity-70">{item.qty}x {item.name}</span>
                  <span className="font-bold">Rs. {((item.salePrice || item.price) * item.qty).toLocaleString()}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-white/10 pt-4 flex justify-between items-center font-bold text-lg">
              <span>Total</span>
              <span className="text-teal-accent text-2xl">Rs. {total.toLocaleString()}</span>
            </div>
          </div>
          <button onClick={onBack} className="w-full py-4 border-2 border-gray-200 rounded-2xl font-bold text-gray-500 hover:bg-white transition-all">Cancel Order</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;