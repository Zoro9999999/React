import React, { useState } from 'react';
import './Cart.css';
import { Link } from 'react-router-dom';
import { IoIosRemoveCircleOutline } from 'react-icons/io';

const Cart = () => {
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  const isEmpty = cartItems.length === 0;

  const handleRemoveFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleClearCart = () => {
    setCartItems([]);
    localStorage.removeItem('cart');
  };

  return (
    <>
      <div className="cart-container">
        <h2>Shopping Cart</h2>
        {isEmpty ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((product) => (
            <div key={product.id} className="cart-item">
              <img src={product.thumbnail} alt={product.title} className="cart-item-image" />
              <button className="remove-btn" onClick={() => handleRemoveFromCart(product.id)}>
                  <IoIosRemoveCircleOutline />
                </button>
              <div className="cart-item-details">
                <h3>{product.title}</h3>
                <p>Description: {product.description}</p>
                <p>Price: ${product.price}</p>
                <hr/>
              </div>
            </div>
          ))
        )}
      </div>
      {!isEmpty && (
        <div className="cart-buttons">
          <button className="clear-cart-btn" onClick={handleClearCart}>
            Clear Cart
          </button>
          <button className="buy-now-btn">Buy Now</button>
        </div>
      )}
      {isEmpty && (
        <Link to="/">
          <button className="continue-shopping-btn">Continue Shopping</button>
        </Link>
      )}
    </>
  );
};

export default Cart;


