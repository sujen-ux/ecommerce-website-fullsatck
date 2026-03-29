import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Elevate Your Style with <span>Premium Quality</span></h1>
        <p>Discover our exclusive collection designed for comfort, style, and durability.</p>
        <a href="#shop" className="cta-button">Shop Now</a>
      </div>
      <div className="hero-image">
        <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8fc0248f-9357-40ee-aef0-aa54a4038741.png" alt="Hero Fashion" />
      </div>
    </section>
  );
};

export default Hero;