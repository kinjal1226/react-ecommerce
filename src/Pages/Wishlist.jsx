import React, { useContext } from "react";
import { WishlistContext } from "../Context/WishlistContext";
import { CartContext } from "../context/CartContext";

export default function Wishlist() {

  const {
    wishlist,
    removeFromWishlist,
  } = useContext(WishlistContext);
    const { addToCart } = useContext(CartContext);

  return (

    <div style={{ padding: "20px" }}>

      <h1>My Wishlist</h1>

      {wishlist.length === 0 ? (

        <h2>No Items In Wishlist</h2>

      ) : (

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
            marginTop: "20px",
          }}
        >

          {wishlist.map((item) => (

            <div
              key={item.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "15px",
                textAlign: "center",
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
              }}
            >

              <img
                src={item.image}
                alt=""
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "contain",
                }}
              />

              <h3>{item.name}</h3>

              <p>${item.price}</p>
 
    <div style={{display:"flex",justifyContent:"center",justifyContent:"space-evenly"}}>
               <button
                  onClick={() => addToCart(item)}
                >
                  Add To Cart
                </button>

              <button
                onClick={() =>
                  removeFromWishlist(item.id)
                }
              >
                Remove
              </button>
     </div>
            </div>

          ))}

        </div>

      )}

    </div>
  );
}