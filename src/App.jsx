import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutMe from "./pages/AboutMe";
import Experience from "./pages/Experience";

function App() {
  return (
    <BrowserRouter>
      <Navbar /> {/* Display Navbar on every route */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/aboutme" element={<AboutMe/>} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
      {/* <Footer /> Display Footer on every route */}
    </BrowserRouter>
  );
}

export default App;
