import React , {useEffect,useContext, useState} from 'react'
import rightimage from '../assets/rightimage.png';
import "../Pages/OrderSucces.css";
import { useLocation } from 'react-router-dom';
import { IoBagCheckOutline } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { MdOutlinePayment } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { CiSquareChevDown } from "react-icons/ci";
import {CartContext} from "../Context/CartContext";
import bag from "../assets/bag.png"
import { useNavigate } from 'react-router-dom';
export default function OrderSucces() {
  const navigate = useNavigate();
     const location = useLocation();
     const order = location.state;
      const {cart , setCart ,  totalPrice }= useContext(CartContext);
const total = order?.total;
const subtotal = order?.items?.reduce(
  (sum, item) => sum + item.price * item.qty,
  0
);

useEffect(() => {

   
   const oldOrders =
   JSON.parse(localStorage.getItem("orders")) || [];

  
   localStorage.setItem(
      "orders",
      JSON.stringify([...oldOrders, order])
   );

   
   setCart([]);

}, []);
   
  return (
    <div>
             <div className= "succes-img">
                  <img src={rightimage} alt="" />
             </div>

             <div className='succes-tag'>
                <h1>Your Order Was Placed Successfully!</h1>
                <p>Thank You for Shoppingwith us .</p>
             </div>

             <div className='ord-id'>
                 <IoBagCheckOutline className='ord-icon' />
                <p>Order ID  :  {order?.id} </p>     
             </div>

              <div className='ord-time'>
                <FaCalendarAlt className='ord-icon-cal' />
                <p>Orderd on : {order?.date}</p>
              </div>


              <div className='detail-sec'>
                 <div className='det-sec'>
                     <h1> <IoPerson  className='det-icons' />Customer Details</h1>
                     <p>Name : {order?.customer?.name}</p>
                     <p>Email :  {order?.customer?.email}</p>
                     <p>Phone : {order?.customer?.phone}</p>

                 </div>
                 <div className='det-sec'>
                      <h1 ><FaLocationDot  className='det-icons' />Shipping Address</h1>
                    <p> {order?.customer.address}, {order?.customer.city}- {order?.customer.pincode}</p>  
                 </div>
                 <div className='det-sec'>
                      <h1><MdOutlinePayment  className='det-icons'  /> Payment Method </h1>
                     <p> {order?.customer.payment}</p> 
                 </div>
              </div>


              <div style={{display:"flex",justifyContent:"space-evenly",marginTop:"40px",gap:"30px"}}>
                  <div className='item-sec-det'>
                            <div style={{display:"flex",alignItems:"center",gap:"20px"}}>
                                <CiSquareChevDown  className='det-icons' />
                                <h3>Items Ordered</h3>
                            </div>

                            <div >
                                       {order?.items?.map((item) => (
                                           <div className='items' key={item.id}>
                                           <img style={{width:"75px",height:"70px"}} src={item.image} alt="" />
                                          <div>
                                          <p>{item.name}</p>
                                           <p>₹{item.price} × {item.qty}</p>
                                            </div>

                                           <div className='price'>
                                           { item.price}
                                           </div>
                                           
                                            
                                       </div>
                                
                                         ))}
                                      
                            </div>
      
                        
                    </div> 
                       

                    <div className='item-sec-price'>
                            <div style={{marginLeft:"20px"}}>
                              <h1>Order Summary</h1>
                            </div>
                             <div className="summary-row">
                                <span>Subtotal</span>
                                <span style={{marginRight:"10px"}}>₹{subtotal}</span>
                             </div>

                              <div className="summary-row">
                                 <span >Discount</span>
                                 <span style={{color:"green",marginRight:"10px"}}>-₹100</span>
                              </div>

                               <div className="summary-row">
                                     <span>Shipping</span>
                                     <span style={{marginRight:"10px",color:"green"}}>Free</span>
                               </div>

                               
                                 <div className="summary-row total " >
                                     <span>Total Paid</span>
                                     <span style={{fontSize:"25px",color:"purple",marginRight:"10px"}}>₹{total}</span>
           
                                </div>

                                  <img style={{marginLeft:"20px"}} src={bag} alt="" />
                    </div>
               </div>     
                    
                    <div style={{display:"flex"}}>
                             <div >
                                 <button style={{marginTop:"30px",marginLeft:"130px",width:"240px",height:"45px",backgroundColor:"purple"
                                  ,color:"white",fontSize:"20px"
                                 }} onClick={() => navigate("/")}>Contiue Shopping</button>
                            </div>

                              <div >
                                 <button style={{marginTop:"30px",marginLeft:"130px",width:"240px",height:"45px",backgroundColor:"purple"
                                  ,color:"white",fontSize:"20px"
                                 }} onClick={() => navigate("/Orders")}>My Orders</button>
                            </div>
                     </div>       
    </div>
  )
}
