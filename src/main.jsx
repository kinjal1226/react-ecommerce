import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CartProvider } from "./Context/CartContext";
import { WishlistProvider } from "./Context/WishlistContext";
createRoot(document.getElementById('root')).render(
      <WishlistProvider>
    <CartProvider>
          <App />
    </CartProvider>
    </WishlistProvider>
  
  
)
