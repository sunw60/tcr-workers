import React from 'react'
import { Link } from 'react-router-dom'
import vlogo from './Vlogo.png';
import './Navbar.css'

export default function Navbar() {
    return (
        <>
        <div className = "Navbar">
		<div className="navLogo">
                <Link to = "/" className ="VeevaLogo">
                <img src={vlogo} className="App-logo" alt="vlogo"/>
                </Link>
		</div>
                <div className="NavRight">           
                    <Link className = "NavLink" to="/"> Home </Link>                     

                    <Link className= "NavLink" to="/path2"> About </Link>                 
                               
                    <Link className = "NavLink" to="/path3"> Data Analysis </Link>                     

                    <Link className = "NavLink" to="/path4"> Predictions </Link>                     
                    
                </div>
           
        </div>
        </>
    )
}
