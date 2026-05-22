import React,{useContext} from "react";
import { WishlistContext } from "../Context/WishlistContext";
import { CartContext } from "../context/CartContext";

export default function ProductCard({ item }) {
    const { addToCart } = useContext(CartContext);
      const { wishlist, toggleWishlist } =
    useContext(WishlistContext);

  // Check if product exists in wishlist
  const isWishlisted = wishlist.find(
    (wishlistItem) => wishlistItem.id  ===item.id
  );
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "10px",
        borderRadius: "10px",
        textAlign: "center",
        position:"relative"
       
      }}
    >
        <button style={{position:"absolute",
top:"10px",
right:"10px",
border:"none"}}
        onClick={() => toggleWishlist(item)}
      >
        {isWishlisted ? "❤️" : "🖤"}
      </button>
      <img
        src={item.image}
        alt={item.name}
        style={{ width: "100%", height: "200px", objectFit: "contain" }}
      />

      <h3>{item.name}</h3>    
      
      <p>${item.price}</p>

      <button style={{borderRadius:"10px",width:"130px",height:"40px",backgroundColor:"purple",color:"white"}} onClick={() => addToCart(item)}>Add to Cart</button>
      
    </div>
  );
}