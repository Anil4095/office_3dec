import React, { useState } from 'react'
import '../App.css';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

     const [email, setEmail]=useState()
     const [password, setPassword]=useState()

    const handleClick=()=>{
    
       toast("Log In Successful")
    }
    return (
        <>
        <h1 style={{marginLeft:"20%", marginTop:"80px"}}>Welcome, This is <span style={{color:"red"}}>"IMG GLOBAL INFOTECH"</span></h1>
        <div className="login-div" 
             style={{padding:"30px 0px 0px 10px"}}>
       
        <div className="inp-fil" 
             style={{ paddingBottom:"30px"}}>
          <input  type="email"   placeholder="Email.." value={email} onChange={(e)=>setEmail(e.target.value)} />
       </div>

         <div>
          <input  type="password"  placeholder="Password.." value={password}  onChange={(e)=>setPassword(e.target.value)}/>
       </div>

       <div className="btn-div" style={{padding:"20px 0 0 35%"}}>
          <button  style={{height: "30px",width: "45%",borderRadius: "10px"}} onClick={handleClick} >Log In</button>
       </div>
       </div>
       
       <ToastContainer position="top-center"/>

      </> 
    )
}

export default Login;
