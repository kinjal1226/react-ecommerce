import React from 'react'
import "../Pages/Signup.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate();
    const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handlelogin=(e) =>{
      e.preventDefault();

     setError("")
     setSuccess("")

     if(!username || !password)
     {
      setError("please fill all fields");
        return;
     }

     const users= JSON.parse(localStorage.getItem("users"))  || [];

     console.log("Users:", users);

     if(users.length === 0)
     {
      setError("No users found.please signup first.");
      return;
     }

     const validusers = users.find( (u) => u.username === username && u.password === password );
     console.log("Match:", validusers);

     if(validusers)
     {
      setSuccess("Login successful")
     }
     else
     {
      setError("invalid username or password")
     }

      setUsername("");
  setPassword("");

    navigate("/");
  };


  return (
    
      <form   className='Cont' onSubmit={handlelogin}> 
         
         <h1>Login</h1>

         {error && <p style={{ color: "purple" }}>{error}</p>}
       {success && <p style={{ color: "purple" }}>{success}</p>}

         <input value={username} onChange={(e)=>setUsername(e.target.value)} type="text" name="" id=""   placeholder='Username' />
         <input  value={password}  onChange={(e)=>setPassword(e.target.value)}  type="password" name="" id="" placeholder='Password' />

       <button type="submit" className="btn">
    Login
  </button>
</form>
    
  )
}
