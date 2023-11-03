import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Projects from "./pages/Projects";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/projects" element={<Projects/>} />
          {/* <Route path="/experience" element={} />
          <Route path="/contact" element={} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
