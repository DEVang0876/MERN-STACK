import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router";
import './App.css'
import Home from './home'
import About from './about'
import Contact from './contact'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className='fire'>
        <h1>King</h1>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
