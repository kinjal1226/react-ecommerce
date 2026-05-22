import React, { useEffect, useState } from "react";
import mensbanner from "../assets/mensbanner.jpg";

import Filter from "../Filters/Filter";
import Pagination from "../Filters/Pagination";
import ProductCard from "../Components/ProductCard";

export default function Mens() {

  
  const [products, setProducts] = useState([]);

  //  Filters
  const [categories, setCategories] = useState([]);
  const [price, setPrice] = useState(1000);

  //  Pagination
  const [page, setPage] = useState(1);
  const perPage = 6;

  //  Fetch data from json-server
   useEffect(()=>{
     fetch("http://localhost:4000/mens")
     .then((res)=>res.json())
     .then((data)=>setProducts(data))
     .catch((err)=> console.log("error:",err))
 
   },[])
 console.log("Products:", products);

 


  //  Filter logic
  const filteredData = products.filter((item) => {
    const categoryMatch =
     categories.length === 0 || categories.includes(item.category);

    const priceMatch = item.price <= price;

    return categoryMatch && priceMatch;
 });

  // 📄 Pagination logic
  const start = (page - 1) * perPage;
  const end = page * perPage;
  const data = filteredData.slice(start, end);

  return (
    <div style={{ position: "relative", width: "100%" }}>

      {/*  Banner */}
      <img
        style={{ width: "100%", height: "520px", objectFit: "cover" }}
        src={mensbanner}
        alt="mens banner"
      />

      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "80px",
          transform: "translateY(-50%)",
        }}
      >
        <h1 style={{ fontSize: "48px", margin: "0" }}>
          Mens' Collection
        </h1>
        <h2 style={{ fontSize: "24px", margin: "10px 0 20px" }}>
          Upgrade your Style
        </h2>
        <button
          style={{
            padding: "10px 20px",
            background: "#ff4d8d",
            color: "white",
            border: "none",
            borderRadius: "20px",
            cursor: "pointer",
          }}
        >
          Shop Now
        </button>
      </div>

      {/* 🧩 Layout */}
      <div style={{ marginTop: "40px", display: "flex" }}>

        {/* 🔽 Filter */}
        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "20px",
            width: "20%",
            padding: "15px",
            marginLeft: "10px",
          }}
        >
          <Filter
            categories={categories}
            setCategories={setCategories}
            price={price}
            setPrice={setPrice}
             filterOptions={[
    "shirt",
    "jacket",
    "jeans",
    "Tshirt",
  ]}
          />
        </div>

        {/* 🛍 Products */}
        <div
          style={{
            width: "75%",
            marginLeft: "30px",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
          }}
        >
          {data.length === 0 ? (
            <h2>No products found</h2>
          ) : (
            data.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))
          )}
        </div>
      </div>

      {/* 📄 Pagination */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Pagination
          page={page}
          setPage={setPage}
          totalItems={products.length}
          perPage={perPage}
        />
      </div>
    </div>
  );
}