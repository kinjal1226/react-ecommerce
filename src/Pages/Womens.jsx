import React, { useEffect, useState } from "react";
import womens from '../assets/womens.jpg';
import Filter from "../Filters/Filter";
import Pagination from "../Filters/Pagination";
import ProductCard from "../Components/ProductCard";



export default function Womens() {

    const [products, setProducts] = useState([]);

 //  Filters
  const [categories, setCategories] = useState([]);
  const [price, setPrice] = useState(1000);

  //  Pagination
  const [page, setPage] = useState(1);
  const perPage = 6;

    //  Filter logic
  const filteredData = products.filter((item) => {
    const categoryMatch =
     categories.length === 0 || categories.includes(item.category);

    const priceMatch = item.price <= price;

    return categoryMatch && priceMatch;
 });

 //  Pagination logic
  const start = (page - 1) * perPage;
  const end = page * perPage;
  const data = filteredData.slice(start, end);


  //fetch data 
  useEffect(()=>{
    fetch("http://localhost:4000/womens")
    .then((res)=>res.json())
    .then((data)=>setProducts(data))
    .catch((err)=> console.log("error:",err))

  },[])

  return (
    <div  style={{ position: "relative", width: "100%" }}>

          <img    style={{ width: "100%", height: "520px", objectFit: "cover" }} src={womens} alt="" />
      
      <div
        style={{
          position: "absolute",
          top: "20%",
          right: "80px",
          transform: "translateY(-50%)",
        }}
      >
        <h1 style={{ fontSize: "48px", margin: "0" }}>
          Womens' Collection
        </h1>
        <h2 style={{ fontSize: "16px", margin: "10px 0 20px" }}>
         Elevate Your Style . Embrace your Confidence
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
    
    "Top",
    "Jumpsuit",
    "jeans",
    "Tshirt",
     "shirt",
     "Dress",
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
    
  )
}
