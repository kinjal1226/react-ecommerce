import React from "react";

export default function Pagination({ page, setPage, totalItems, perPage }) {
  const totalPages = Math.ceil(totalItems / perPage);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      
      <button style={{backgroundColor:"#ff4d8d"}}
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
      >
        Prev
      </button>

      <span style={{ margin: "0 15px" }}>
        Page {page} 
      </span>

      <button style={{backgroundColor:"#ff4d8d"}}
        onClick={() => setPage(page + 1)}
        disabled={page === totalPages}
      >
        Next
      </button>

    </div>
      
  );
}