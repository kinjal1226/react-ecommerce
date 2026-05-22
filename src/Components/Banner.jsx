import React from 'react'
import banner from "../assets/banner.jpg"
import { FaTruck, FaUndo, FaShieldAlt, FaHeadset,FaFacebook ,FaInstagram ,FaTwitter} from "react-icons/fa";
import "../Components/Banner.css";
import { GoArrowRight } from "react-icons/go";
export default function Banner() {
  return (
    <div style={{marginTop:"10px"}}>
        <img  style={{width:"100%"}} src={banner}alt="" />


     <div style={{textAlign:"center"}}>
              <h1 >Find Everything You Need ,</h1>
              <h2 >All in One Place. </h2>
        </div>


       <div className='img-cate'>
            <div className='cate-sec'>
                 <img src="/Cate-img/cate-img.jpg" alt=""  />  
                  <h3>Men</h3>
                  <p>Explore Now</p>
            </div>
            <div className='cate-sec'>
                <img src="/Cate-img/cate-img1.jpg" alt="" />
                <h3>Womens</h3>
                <p>Explore Now</p>
            </div>
            <div className='cate-sec'> 
                  <img src="/Cate-img/cate-img2.jpg" alt="" />
                     <h3>Kids</h3>
                   <p>Explore Now</p>
            </div>
        </div> 
    

    <div style={{boxshadow:" rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",marginTop:"22px",height:"200px" , display:"flex" , justifyContent:"space-around"
      
    }}>

      <div className='icon-bag' >
                <FaTruck  className='icons'/>
                <div>
                     <h4>Free Delivery</h4>
                     <p>Order Above ₹999</p>
                </div> 
      </div>
      <div className='icon-bag'>
                 <FaUndo  className='icons' />
                 <div>
                     <h4> 7 Days Return </h4>
                     <p>Hassle free FReturns</p>
                </div> 
      </div>
      <div className='icon-bag'>
                <FaShieldAlt className='icons' />
                <div>
                    <h4>SECURE PAYMENT</h4>
                   <p>100% secure checkout</p>
                 </div>         
      </div>
      <div className='icon-bag'> 
                 <FaHeadset className='icons' />
                 <div>
                   <h4>24/7 SUPPORT</h4>
                   <p>We’re here to help</p>
               </div>
      </div>

    </div>

    <footer className="footer">
      
      <div className="footer-container">

        {/* Column 1 */}
        <div className="footer-col">
          <h2 className="logo">Click & Buy</h2>
          <p>Your one-stop shop for fashion, electronics and more.</p>
        </div>

        {/* Column 2 */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>Deals</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-col">
          <h4>Customer Service</h4>
          <ul>
            <li>Returns</li>
            <li>Shipping</li>
            <li>FAQs</li>
            <li>Support</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="footer-col">
          <h4>Follow Us</h4>
          <div className="socials">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Click & Buy. All rights reserved.
      </div>

    </footer>
    </div>
  )
}
