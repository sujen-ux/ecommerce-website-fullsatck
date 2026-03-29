import React, { useState, useEffect } from 'react';

const SaleBanner = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const end = new Date().setDate(now.getDate() + 7);
      const diff = end - now;
      
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        mins: Math.floor((diff / 1000 / 60) % 60),
        secs: Math.floor((diff / 1000) % 60)
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="sale-banner">
      <h2>SUMMER SALE</h2>
      <p>Up to 50% off on selected items.</p>
      <div className="countdown">
        <div className="countdown-item">{timeLeft.days}<span>Days</span></div>
        <div className="countdown-item">{timeLeft.hours}<span>Hours</span></div>
        <div className="countdown-item">{timeLeft.mins}<span>Mins</span></div>
        <div className="countdown-item">{timeLeft.secs}<span>Secs</span></div>
      </div>
    </section>
  );
};

export default SaleBanner;