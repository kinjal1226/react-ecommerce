

import React, {
  createContext,
  useEffect,
  useState,
} from "react";

// Create Context
export const WishlistContext = createContext();

// Provider Component
export const WishlistProvider = ({ children }) => {

  // Wishlist State
  const [wishlist, setWishlist] = useState(
    JSON.parse(localStorage.getItem("wishlist")) || []
  );

  // Save Wishlist In LocalStorage
  useEffect(() => {

    localStorage.setItem(
      "wishlist",
      JSON.stringify(wishlist)
    );

  }, [wishlist]);

  // Add To Wishlist
  const addToWishlist = (product) => {

    // Checking Product Already Exists Or Not
    const alreadyExists = wishlist.find(
      (item) => item.id === product.id
    );

    if (!alreadyExists) {

      setWishlist([...wishlist, product]);

    }
  };

  // Remove From Wishlist
  const removeFromWishlist = (id) => {

    const updatedWishlist = wishlist.filter(
      (item) => item.id !== id
    );

    setWishlist(updatedWishlist);
  };

  // Toggle Wishlist
  const toggleWishlist = (product) => {

    const exists = wishlist.find(
      (item) => item.id === product.id
    );

    if (exists) {

      // Remove Product
      removeFromWishlist(product.id);

    } else {

      // Add Product
      addToWishlist(product);

    }
  };

  return (

    <WishlistContext.Provider
      value={{
        wishlist,
        setWishlist,
        addToWishlist,
        removeFromWishlist,
        toggleWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>

  );
};
