import React from 'react';

const Navbar = ({ cartCount }) => {
  return (
    <header className="header-nav">
      <a href="#" className="logo">Sen<span>Shi</span></a>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="#shop">Shop</a></li>
          <li><a href="#shop">Collections</a></li>
          <li><a href="#">About</a></li>
        </ul>
      </nav>
      <div className="cart-icon">
        🛒<span className="cart-count">{cartCount}</span>
      </div>
    </header>
  );
};

export default Navbar;