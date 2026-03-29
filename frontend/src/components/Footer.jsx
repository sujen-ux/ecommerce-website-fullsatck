import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        {/* Brand Column */}
        <div className="footer-column">
          <h3>SenShi</h3>
          <p>We're committed to delivering high-quality apparel with sustainable materials and ethical production methods.</p>
          <div className="social-links">
            <a href="#">FB</a>
            <a href="#">IG</a>
            <a href="#">TW</a>
            <a href="#">YT</a>
          </div>
        </div>

        {/* Shop Column */}
        <div className="footer-column">
          <h3>Shop</h3>
          <ul>
            <li><a href="#">Men's Collection</a></li>
            <li><a href="#">Women's Collection</a></li>
            <li><a href="#">Accessories</a></li>
            <li><a href="#">New Arrivals</a></li>
          </ul>
        </div>

        {/* Support Column */}
        <div className="footer-column">
          <h3>Customer Service</h3>
          <ul>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Shipping & Returns</a></li>
            <li><a href="#">Size Guide</a></li>
          </ul>
        </div>

        {/* About Column */}
        <div className="footer-column">
          <h3>About Us</h3>
          <ul>
            <li><a href="#">Our Story</a></li>
            <li><a href="#">Sustainability</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
      </div>

      <div className="copyright">
        <p>© 2026 SenShi Clothing. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;