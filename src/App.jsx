import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

import Homepage from "./pages/Homepage";
import Projects from "./pages/Projects";
import AboutMe from "./pages/AboutMe";
import Experience from "./pages/Experience";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
