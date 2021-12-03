import React from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css'

const Navbar = () => {
    return (
        <>
           <div>
              
               <ul  className=" main-div" style={{zIndex:"1", paddingBottom:"1rem",justifyContent:"left"}}>
               <img src="https://www.visitsarasota.com/sites/default/files/styles/listing_node_full/public/mmg_lfef_images/img-academy-156-e1cc497311032f22eae4e66ce77b23f3.jpg?itok=A128LF3B" style={{width:"4%" , height:"40px", marginLeft:"10px"}} alt="Logo IMG"/>
               <div className="d-flex" style={{justifyContent:"right"}} >
                   <li>
                       <NavLink className="text-decoration-none"  to="/"  ><p style={{paddingLeft:"20px", paddingRight:"20px", color:"white",margin:"0 0 0 800px"}}>Home</p></NavLink>
                   </li>
                   <li>
                       <NavLink  className="text-decoration-none" to="/user"  ><p style={{paddingLeft:"20px", paddingRight:"20px", color:"white"}}>User</p></NavLink>
                   </li>
                   <li>
                       <NavLink  className="text-decoration-none" to="/career"  ><p style={{paddingLeft:"20px", paddingRight:"20px", color:"white"}}>Career</p></NavLink>
                   </li>
                   <li>
                       <NavLink  className="text-decoration-none" to="/login"  ><p style={{paddingLeft:"20px", paddingRight:"20px", color:"white"}}>Login</p></NavLink>
                   </li>
                   </div>
               </ul>
               </div> 
        </>
    )
}

export default Navbar
