import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

const addToCart = (product) => {
  const formatted = {
    id: product.id,
    name: product.name,   
    price: product.price,
    image: product.image,
  };

  setCart((prev) => {
    const exist = prev.find((item) => item.id === formatted.id);

    if (exist) {
      return prev.map((item) =>
        item.id === formatted.id
          ? { ...item, qty: item.qty + 1 }
          : item
      );
    } else {
      return [...prev, { ...formatted, qty: 1 }];
    }
  });
};
const removeFromCart = (id) => {
  setCart((prev) => prev.filter((item) => item.id !== id));
};

 const increaseQty = (id) => {
  setCart((prev) =>
    prev.map((item) =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    )
  );
};

 const decreaseQty = (id) => {
  setCart((prev) =>
    prev
      .map((item) =>
        item.id === id
          ? { ...item, qty: item.qty - 1 }
          : item
      )
      .filter((item) => item.qty > 0)
  );
};

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        setCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};