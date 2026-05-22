import React , {useEffect,useContext, useState} from 'react'
import { IoPerson } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlinePayment } from "react-icons/md";
import {CartContext} from "../Context/CartContext";
import {useNavigate} from "react-router-dom";
import "../Pages/Checkout.css"
export default function Checkout() {

    const {cart , setCart ,  totalPrice }= useContext(CartContext);
    const Navigate = useNavigate();
   const total = totalPrice - 100;
      
     const [form , setForm] = useState({
                      
             name:"",
             email:"",
             phone:"",
             address:"",
             city:"",
             pincode:"",
             payment:"COD",
     });

     const handleChange =(e) =>{
      setForm({...form,[e.target.name]: e.target.value});
     } ;

    
     const placeOrder = () => {
        if(!form.name || !form.phone || !form.address){
          alert("Please fill  all required fields");
          return;
        }

        const orders = JSON.parse(localStorage.getItem("orders")) || [];

        const newOrder = {
           id :"ORD"+ Date.now(),
           items:cart,
           total : total,
           date : new Date().toLocaleString(),
           status:"processing",
           customer : form,
        };

        orders.push(newOrder);
        localStorage.setItem("orders",JSON.stringify(orders));

        localStorage.removeItem("cart");

        setCart([]);

        Navigate("/OrderSucces",{state:newOrder});

     };

     
  return (
    <div style={{height:"Auto",width:"100%",display:"flex",gap:"200px"}}>
          <div className='cust-info'>
                <div>
                  <h1> <IoPerson className='icons' />Customer Information</h1>
                  <p>Enter Your personal details</p>
                </div>
               
                 <div className='box'>
                    <input type="text" name="name" id="" placeholder='Enter your full name '  onChange={handleChange}/>
                    <input type="email" name="email" id="" placeholder='Enter your email address' onChange={handleChange} />
                    <input type="number" name="phone" id="" placeholder='Enter your phone number' onChange={handleChange} />
                 </div>
                
                 <div>
                    <h1><FaLocationDot  className='icons' />Shipping Address</h1>
                    <p>Where should we deliver your order?</p>
                 </div>

                 <div>
                    <input type="text" name="address" id="" placeholder='House no,Building name , street name ' onChange={handleChange} />
                    <input type="text" name="city" id="" placeholder='Enter your city' onChange={handleChange}/>
                    <input type="pincode" name="pincode" id=""  placeholder='Enter pincode' onChange={handleChange}/>
                 </div>

                 <div >
                      <h1><MdOutlinePayment  className='icons' />Payment Method </h1>
                      <p>Choose a payment method </p>

                 </div>

                 <div className="payment-options" >
                     <label className="payment-card">
                         <input
                                  type="radio"
                                   name="payment"
                                    value="COD"
                                    checked={form.payment === "COD"}
                                 onChange={handleChange}
                                                         />
                                   Cash on Delivery
                      </label>  

                       <label className="payment-card">
                             <input
                                      type="radio"
                                      name="payment"
                                       value="Card"
                                     onChange={handleChange}
                                      />
                                    Credit / Debit Card
                                       </label>
                    </div>
               </div>
       

         <div className='order-sec'>
               <h3>Order Summary</h3>


        {cart.map((item) => (
          <div className='items' key={item.id}>
            <img style={{width:"75px",height:"70px"}} src={item.image} alt="" />
            <div>
              <p>{item.name}</p>
              <p>₹{item.price} × {item.qty}</p>
            </div>
          </div>
        ))}
              


        <div className='Price-sec' >
          <span>Subtotal</span>
          <span>₹{totalPrice}</span>
        </div>

        <div className='Price-sec'  >
          <span>Total</span>
          <span>₹{total}</span>
        </div>


        <button className='btn-order' onClick={placeOrder}>Place Order</button>
        
     </div>


</div>
  )
}
