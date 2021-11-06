import React from 'react'
import vlogo from './Vlogo.png';
import { 
    Route, Routes, Router, Link
 } from 'react-router-dom'
import Path3 from './Path3.js'
export default function Home() {
    return (
        <div>
        <body>
                <div>
                <img src={vlogo} className="App-logo" alt="vlogo" />
                </div>
                <div>
                    <Link to="/path3" exact>
                <button class="button-77" role="button">Search Prescription Data</button>
                </Link>
                <Routes>
                    <Route path="/path3" element={<Path3/>} />      
                </Routes>
                </div>
            
        </body>
        </div>
    )
}
