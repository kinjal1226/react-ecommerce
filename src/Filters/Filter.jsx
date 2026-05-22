import React from "react";


export default function Filter({ categories, setCategories, price, 
  setPrice ,filterOptions,  }) {

  const handleCheckbox = (e) => {
    const value = e.target.value;

    let updated;

    if (e.target.checked) {
      updated = [...categories, value];
    } else {
      updated = categories.filter((item) => item !== value);
    }

    setCategories(updated);
  };

  return (
    <div>
        <p style={{fontSize:"25px",fontWeight:"bold",marginLeft:"35px"}}>Filter By</p>
       <h3 style={{fontSize:"25px",fontWeight:"bold",marginLeft:"35px"}}>Categories</h3>

 {filterOptions.map((item, index) => (

        <div
          key={index}
          style={{
            marginLeft: "35px",
            marginBottom: "10px",
          }}
        >

          <label>

            <input
              type="checkbox"
              value={item}
              onChange={handleCheckbox}
              checked={categories.includes(item)}
            />

            {" "}
            {item.charAt(0).toUpperCase() +
              item.slice(1)}

          </label>

        </div>

      ))}



      <h3 style={{fontSize:"25px",fontWeight:"bold",marginLeft:"35px"}}>Price: ${price}</h3>

<input  style={{marginLeft:"35px"}}
  type="range"
  min="0"
  max="10000"
  value={price}
  onChange={(e) => setPrice(e.target.value)}
/>  




    </div>
  );
}