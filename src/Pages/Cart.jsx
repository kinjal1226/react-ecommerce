import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../Pages/Cart.css";
import { MdDelete } from "react-icons/md";
 import { Link } from "react-router-dom";

export default function Cart() {
  const {
    cart,
    removeFromCart,
    increaseQty,
    decreaseQty,
    totalPrice,
  } = useContext(CartContext);

  const total = totalPrice - 100;

  return (
    <div className="cart-container">

      {/* LEFT SIDE - CART ITEMS */}
      <div className="cart-list">
        <h2> My Cart</h2>

        {cart.map((item) => (
          <div className="cart-item" key={item.id}>

            {/* LEFT PART */}
            <div className="cart">
              <img src={item.image} alt="" />

              <div>
                <h4>{item.name}</h4>
                <p>₹{item.price}</p>
              </div>
            </div>

            {/* RIGHT PART */}
            <div className="cart-actions">

              <div className="inc-dec">
                <button onClick={() => decreaseQty(item.id)}>-</button>
                <span>{item.qty}</span>
                <button onClick={() => increaseQty(item.id)}>+</button>
              </div>

              <button
                className="delete-btn"
                onClick={() => removeFromCart(item.id)}
              >
                <MdDelete />
              </button>

            </div>
           
          </div>
        
        ))}
       
          <Link to="/">
  <button style={{width:"190px", color:"white", backgroundColor:"purple"}}>
    Continue Shopping
  </button>
</Link>
      </div>

      {/* RIGHT SIDE - ORDER SUMMARY */}
      <div className="summary">
        <h2>Order Summary</h2>

        <div className="summary-row">
          <span>Subtotal</span>
          <span>₹{totalPrice}</span>
        </div>

        <div className="summary-row">
          <span>Discount</span>
          <span>-₹100</span>
        </div>

        <div className="summary-row">
          <span>Shipping</span>
          <span className="free">Free</span>
        </div>

        <hr />

        <div className="summary-row total">
          <span>Total</span>
          <span>₹{total}</span>
           
        </div>

     <Link to="/Checkout">
        <button style={{width:"100%",marginTop:"30px",height:"40px",color:"white",backgroundColor:"purple"}}>Proceed To Checkout</button>
     </Link>
      </div>


      
    </div>
  );
}