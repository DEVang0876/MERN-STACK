// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// import About from './About'
// import Home from './Home'
// import Contact from './Contact'

// function App() {
//   const [count, setCount] = useState(30)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo react" alt="React logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <Home></Home>
//       <h1>King+Fire</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 100)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//         <About className="about"></About>
//       </div>
//       <p className="read-the-docs">
//         DO not CLICK ON LOGO
//       </p>
//       <Contact></Contact>
//     </>
//   )
// }

// export default App

import StorageDemo from "./StorageDemo";
import Home from "./home";
import About from "./About";
import Contact from "./Contact";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router";

function App() {
  return (
    <Router>
      <div>
        
        <h1>MainApp</h1>
        <Link to="/Home">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
      <div>
        <StorageDemo />
      </div>
    </Router>
  );
}

export default App;


