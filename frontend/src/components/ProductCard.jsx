import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      {product.tag && <div className="product-tag">{product.tag}</div>}
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <span className="product-category">{product.category || 'Clothing'}</span>
        <h3 className="product-title">{product.name}</h3>
        <div className="product-price">
          <span className="current-price">${product.price}</span>
          {product.oldPrice && <span className="original-price">${product.oldPrice}</span>}
        </div>
        <button className="add-to-cart">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;