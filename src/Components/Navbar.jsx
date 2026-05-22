import React,{useContext} from 'react'
import "../Components/Navbar.css"
import { FaHeart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import logo from "../assets/logo.png";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { cart } = useContext(CartContext);
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  return (
    <div className='nav'>
          <div>
            <img style={{height:"140px"}} src={logo} alt="" />
          </div>         

          <div className='options'>
         <Link  to="Mens">Mens</Link> 
          <Link  to="Womens">Womens</Link>
         <Link  to="Kids">Kids</Link>
          <Link  to="Orders">My Orders</Link>
         </div>


          
         <div className='nav-icons'>
         
         
              <Link style={{color:"black"}} to="/Wishlist">
           <FaHeart />
        </Link>
          
        <Link style={{color:"black"}} to="/Signup">
         <FaUser /> 
        </Link>
         
         <Link style={{color:"black"}} to={"/Cart"}>
                   <FaShoppingCart />({totalItems})
         </Link>
          

         </div>

           

    </div>
  )
}
