import React, { useState } from 'react';
import './ProductList.css'; 
import { Products } from './Data';

const ProductList = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    alert("Product Added to Cart");
    console.log(cart)
  };

  return (
    <div className="product-list-container">
      <div className="product-list">
        {Products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.thumbnail} alt={product.title} className="product-image" />
            <div className="product-details">
              <h3 className="product-title">{product.title}</h3>
              <p className="product-description">{product.description}</p>
              <p className="product-price">Price: ${product.price}</p>
              <p className="product-rating">Rating: {product.rating}</p>
              <p className="product-stock">Stock: {product.stock}</p>
              <button className='buybtn'> BUY NOW</button>
              <button className='addbtn' onClick={() => handleAddToCart(product)}>ADD</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;



