

import StorageDemo from "./StorageDemo";
import Home from "./home";
import Anime from "./anime";
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
        <Link to="/StorageDemo">Storage Demo</Link>
        <Link to="/Anime">Anime</Link>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/StorageDemo" element={<StorageDemo />} />
          <Route path="/Anime" element={<Anime />} />
        </Routes>
      </div>
      <div>
        <StorageDemo />
      </div>
    </Router>
  );
}

export default App;


