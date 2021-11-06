import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <>
        <nav className = "Navbar">
                <Link to = "/" className ="VeevaLogo" exact >
                    <h1>Logo</h1>
                </Link>
                <div className="NavRight">           
                    <Link className = "NavLink" to="/path1"> Button1 </Link>                     

                    <Link className= "NavLink" to="/path2"> Button2 </Link>                 
                               
                    <Link className = "NavLink" to="/path3"> Button3 </Link>                     

                    <Link className = "NavLink" to="/path4"> Button4 </Link>                     
                    
                </div>
           
        </nav>
        </>
    )
}
