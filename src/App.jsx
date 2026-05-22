import React from 'react'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mens from './Pages/Mens';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Womens from './Pages/Womens';
import Cart from "./pages/Cart";
import { CartProvider } from "./context/CartContext";
import ProductCard from './Components/ProductCard';
import Checkout from './Pages/Checkout';
import OrderSucces from './Pages/OrderSucces';
import Orders from './Pages/Orders';
import Wishlist from './Pages/Wishlist';
import Kids from './Pages/Kids';
import { WishlistProvider } from "./Context/WishlistContext";
function Home() {
  return (
    <div>
      <Banner />  
     
    </div>
  );
}




export default function App() {
  return (
    <div>
          <CartProvider>
             <WishlistProvider>
       <BrowserRouter>
         <Navbar />
      <Routes>
         
        <Route path="/" element={<Home />}  />
        <Route path="/Signup" element={<Signup />} />
          <Route path="/Mens" element={<Mens />} />
          <Route path="/Login" element={<Login />} />
            <Route path="/Womens" element={<Womens />} />
                        <Route path="/Cart" element={<Cart />} />
           <Route path="/Checkout" element={<Checkout />} />
            <Route path="/OrderSucces" element={<OrderSucces />} />
              <Route path="/Orders" element={<Orders />} />
               <Route path="/Wishlist" element={<Wishlist />} />
                   <Route path="/Kids" element={<Kids />} />
      </Routes>
    </BrowserRouter>
    </WishlistProvider>
   </CartProvider>
       
    </div>
  )
}
