import logo from './logo.svg';
import './App.css';
import Component from './Component.js'
import Navbar from './Navbar.js'
import './Navbar.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import Home from './Home.js'
import Path1 from './Path1.js'
import Path2 from './Path2.js'
import Path3 from './Path3.js'
import Path4 from './Path4.js'

function App() {
  return (
    <Router>
      <Navbar />
      
      <Routes>
         <Route exact path="/" element={<Home/>} />

          <Route path="/path1" element={<Path1/>} />

          <Route path="/path2" element={<Path2/>} />
           
          <Route path="/path3" element={<Path3/>} />
        
          <Route path="/path4" element={<Path4/>} />
           
      </Routes>
     
    </Router>
  );
}

export default App;
