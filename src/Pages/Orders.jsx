import React, {useEffect,useState} from 'react';

export default function Orders() {

   const [orders, setOrders] = useState([]);

   useEffect(() => {

      const savedOrders =
      JSON.parse(localStorage.getItem("orders")) || [];

      setOrders(savedOrders);

   }, []);

   const getOrderStatus = (orderDate) => {

      const today = new Date();

      const placedDate = new Date(orderDate);

      const diffDays = Math.floor(
         (today - placedDate) /
         (1000 * 60 * 60 * 24)
      );

      if(diffDays >= 5){
         return "Delivered";
      }

      else if(diffDays >= 3){
         return "Out For Delivery";
      }

      else if(diffDays >= 1){
         return "Shipped";
      }

      else{
         return "Processing";
      }
   };

   return (

      <div>

         <h1>My Orders</h1>

      {orders.map((order) => {

   if (!order) return null;

   const status = getOrderStatus(order.date);

            return (

               <div
                  key={order.id}
                  style={{
                     border: "1px solid #ddd",
                     margin: "20px",
                     padding: "20px",
                     display: "flex",
                     gap: "40px",
                     marginLeft: "40px",
                     alignItems: "center",
                     flexWrap: "wrap"
                  }}
               >

                  <div>
                     <h3>
                        Order ID: {order.id}
                     </h3>

                     <p>{order.date}</p>
                  </div>

                  {order.items.map((item) => (

                     <div key={item.id}>

                        <img
                           src={item.image}
                           width="100"
                           alt=""
                        />

                     </div>

                  ))}

                  <p style={{ fontSize: "20px" }}>
                     Total Amount : {order.total}
                  </p>

                  <div
                     style={{
                        padding: "10px 20px",
                        borderRadius: "30px",
                        height: "30px",
                        marginTop: "20px",

                        background:
                           status === "Delivered"
                              ? "#e7f8ec"

                              : status === "Shipped"
                                 ? "#e8f1ff"

                                 : status === "Out For Delivery"
                                    ? "#f3e8ff"

                                    : "#fff3e6",

                        color:
                           status === "Delivered"
                              ? "green"

                              : status === "Shipped"
                                 ? "#0066ff"

                                 : status === "Out For Delivery"
                                    ? "purple"

                                    : "#ff8800",

                        fontWeight: "bold",
                        width: "fit-content"
                     }}
                  >

                     {status}

                  </div>

                  <button
                     style={{
                        marginTop: "20px",
                        width: "140px",
                        height: "45px",
                        border: "none",
                        borderRadius: "10px",
                        background: "purple",
                        color: "white",
                        fontSize: "16px",
                        cursor: "pointer"
                     }}
                  >

                     Buy Again

                  </button>

               </div>

            );

         })}

      </div>

   );
  
}