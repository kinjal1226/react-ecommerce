import React from 'react'
import "../Pages/Signup.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
    const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSignup = ()=>{
    setError("");
    setSuccess("");

       //validation 
      if(!username || !password){
    setError("All Fields  are required");
 return;


  // getting users from localstorage
  };
    let users = JSON.parse(localStorage.getItem("users")) || [];
  
     //check user exists or not
  const exists =users.find((u)=> u.username === username);
  if(exists){
    setError("user already exists");
  return;
  }

    //adding new user
  const newUser = {username,password};
  users.push(newUser);

  localStorage.setItem("users",JSON.stringify(users));

  setSuccess("signup successfully");

  //clearing inputs
  setUsername("");
  setPassword("");
  }
  

  return (
    <div className='Cont'>

     
        <h1>Sign Up</h1>

         {error && <p style={{color:"purple" , textAlign:"center"}}>{error}</p>}
        {success && <p style={{color:"purple",textAlign:"center"}}>{success}</p>}
        
         <input  value={username}  onChange={(e)=>setUsername(e.target.value)} type="text" name="" id="" placeholder='Username' />
        <input  value={password}   onChange={(e)=>setPassword(e.target.value)} type="password" name="" id=""   placeholder='Password' />

        <button onClick={handleSignup} className='btn'>Signup</button>


         <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"20px"}}>
             <p> Already exists ?</p>
              <Link to="/login">Login</Link>
         </div>
        

    </div>
  )
}
